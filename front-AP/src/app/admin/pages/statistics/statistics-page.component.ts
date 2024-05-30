import { Component, ViewChild } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { DropdownMenuComponent } from '../../../shared/components/dropdown-menu/dropdown-menu.component';
import { MovieBoxComponent } from '../../../shared/components/movie-box/movie-box.component';
import { ApexDataLabels, ApexMarkers, ApexNonAxisChartSeries, NgApexchartsModule } from 'ng-apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

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
    NgApexchartsModule
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
    "Users"
  ]

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        height: 350,
        type: "pie",
        background: "#45455E"
      },
      labels: ["Men", "Women"],
      dataLabels: {
        enabled: false,
        style: {
          colors:  ['#FFFFFF']
        }
      }
    };


  }
}
