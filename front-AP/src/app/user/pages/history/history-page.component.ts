import { UserApiService } from './../../../services/user-api.service';
import { Component } from '@angular/core';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { ContentCardComponent } from '../../../shared/components/content-card/content-card.component';
import { DropdownMenuComponent } from '../../../shared/components/dropdown-menu/dropdown-menu.component';
import { ContentAPIService } from '../../../services/content-api.service';
import { Content } from '../../../interfaces/contentResponse.interface';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [
    BadgeComponent,
    ContentCardComponent,
    DropdownMenuComponent
  ],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {
  movie: string[] = [
    "https://i.ebayimg.com/images/g/9HcAAOSwuiVgpIKd/s-l1600.webp",
    "Mugen Train",
    "Movie"
  ]
  categories: string [] = ["Animation", "Action"]
  iterator: any [] = Array(20).fill(0)

  dropdownCategories: string [] = [
    "3 months",
    "6 months",
    "12 months"
  ]

  contentList: Content[] = [];

  constructor(private userApi: UserApiService,
      private contentApi: ContentAPIService
  ){}

  ngOnInit(){
    this.getBy3m()
  }

  getBy3m(){
    this.userApi.getHistory3m().subscribe(
      res => {
        res?.data.forEach(
          historyContent => {
            this.getContent(historyContent.id)
          }
        )
      }
    )
  }

  getBy6m(){
    this.userApi.getHistory6m().subscribe(
      res => {
        res?.data.forEach(
          historyContent => {
            this.getContent(historyContent.id)
          }
        )
      }
    )
  }

  getBy1y(){
    this.userApi.getHistory1y().subscribe(
      res => {
        res?.data.forEach(
          historyContent => {
            this.getContent(historyContent.id)
          }
        )
      }
    )
  }


  getContent(id: number){
    this.contentList = []
    this.contentApi.getPurchaseContentById(id.toString()).subscribe(
      res => {
        res!.data.forEach(
          data => {
            this.contentApi.getContentById(data.content.toString()).subscribe(
              content => {
                this.contentList.push(content!.data[0])
              }
            )
          }
        )
      }
    )
  }

  changeFilter(index: number){
    if(index==0){
      this.getBy3m()
    }else if(index==1){
      this.getBy6m()
    }else{
      this.getBy1y()
    }
  }
}
