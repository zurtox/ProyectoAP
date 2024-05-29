import { Component } from '@angular/core';
import { ContentAPIService } from '../../../services/content-api.service';
import { UserApiService } from '../../../services/user-api.service';
import { Content } from '../../../interfaces/contentResponse.interface';
import { ContentCardComponent } from '../../../shared/components/content-card/content-card.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    ContentCardComponent,
    ButtonComponent
  ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  constructor(private userApi: UserApiService,
      private contentApi: ContentAPIService
  ){}

  contentList: Content[] = []
  totalSum: number = 0

  ngOnInit(){
    this.userApi.getCartContent().subscribe(
      res => {
        res?.data.forEach(
          (content) => {
            this.contentApi.getContentById(content.content.toString()).subscribe(
              eachContent => {
                this.contentList.push(eachContent!.data[0])
                this.totalSum += eachContent!.data[0].price
              }
            )
          }
        )
      }
    )
    console.log(this.contentList)
  }

  buyContent(){
    this.userApi.addPurchase().subscribe(
      res => {
        console.log(res)
      }
    )
  }
}
