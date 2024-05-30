import { Component, ViewChild } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { DropdownMenuComponent } from '../../../shared/components/dropdown-menu/dropdown-menu.component';
import { MovieBoxComponent } from '../../../shared/components/movie-box/movie-box.component';
import { ApexDataLabels, ApexMarkers, ApexNonAxisChartSeries, NgApexchartsModule } from 'ng-apexcharts';

import {
  ChartComponent,
  ApexChart,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { ContentAPIService } from '../../../services/content-api.service';
import { UserApiService } from '../../../services/user-api.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries
  chart: ApexChart
  labels: string []
  title: ApexTitleSubtitle
  dataLabels: ApexDataLabels
};

@Component({
  selector: 'app-statistics-page',
  standalone: true,
  imports: [
    SearchBoxComponent,
    DropdownMenuComponent,
    MovieBoxComponent,
    NgApexchartsModule,
  ],
  templateUrl: './statistics-page.component.html',
  styleUrl: './statistics-page.component.css'
})
export class StatisticsPageComponent {
  categories: string [] = [
    "Comedy",
    "Action",
    "Horror",
    "Romance"
  ]
  options: string [] = [
    "Movie",
    "Serie",
    "Documentary"
  ]
  types: string [] = [
    "Content",
    "Users Gender",
    "Users Age"
  ]
  femaleCount: number = 0
  maleCount: number = 0
  otherCount: number = 0
  notDefinedCount: number = 0
  movieCount: number = 0
  serieCount: number = 0
  documentaryCount: number = 0

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  contentAPIService: any;

  constructor(private userApiService: UserApiService) {
    this.getContentCount()
  }


  getGenderCount() {
    this.userApiService.getFemaleCount().subscribe(
      (response) => {
        this.femaleCount = response!.count
        this.getMaleCount()
      }
    )
  }

  getMaleCount(){
    this.userApiService.getMaleCount().subscribe(
      (response) => {
        this.maleCount = response!.count
        this.getOtherCount()
      }
    )
  }

  getOtherCount(){
    this.userApiService.getOtherCount().subscribe(
      (response) => {
        this.otherCount = response!.count
        this.getNotDefinedCount()
      }
    )
  }

  getNotDefinedCount(){
    this.userApiService.getNotDefinedCount().subscribe(
      (response) => {
        this.notDefinedCount = response!.count
        this.chartOptions = {
          series: [this.femaleCount, this.maleCount, this.otherCount, this.notDefinedCount],
          chart: {
            height: 350,
            type: "pie",
            background: "#45455E"
          },
          labels: ["Men", "Women", "Other", "Not Defined"],
          dataLabels: {
            enabled: false,
            style: {
              colors:  ['#FFFFFF']
            }
          }
        };
      }
    )
  }

  getContentCount(){
    this.userApiService.getDocumentalCount().subscribe(
      (response) => {
        this.documentaryCount = response!.data
        this.getMovieCount()
      }
    )
  }

  getMovieCount(){
    this.userApiService.getMoviesCount().subscribe(
      (response) => {
        this.movieCount = response!.data
        this.getSerieCount()
      }
    )
  }

  getSerieCount(){
    this.userApiService.getSeriesCount().subscribe(
      (response) => {
        this.serieCount = response!.data
        this.chartOptions = {
          series: [this.documentaryCount, this.movieCount, this.serieCount],
          chart: {
            height: 350,
            type: "pie",
            background: "#45455E"
          },
          labels: ["Documentaries", "Movies", "Series"],
          dataLabels: {
            enabled: false,
            style: {
              colors:  ['#FFFFFF']
            }
          }
        };
      }
    )
  }

  getSelectedOptions(index: number) {
      if(index == 0){
        this.getContentCount()
      }else if (index == 1){
        this.getGenderCount()
      }else{
        this.getAgeDistribution()
      }
  }

  getAgeDistribution(){
    let titles: string [] = []
    let counts: number [] = []
    this.userApiService.getAgeDistribution().subscribe(
      (response) => {
        response?.data.forEach(
          element => {
            titles.push(element.age_range)
            counts.push(element.user_count)
          }
        )
        this.chartOptions = {
          series: counts,
          chart: {
            height: 350,
            type: "pie",
            background: "#45455E"
          },
          labels: titles,
          dataLabels: {
            enabled: false,
            style: {
              colors:  ['#FFFFFF']
            }
          }
        };
      }
    )

  }

}
