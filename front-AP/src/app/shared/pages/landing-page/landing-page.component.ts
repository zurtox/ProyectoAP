import { Component } from '@angular/core';
import { MovieBoxComponent } from '../../components/movie-box/movie-box.component';
import { ContentAPIService } from '../../../services/content-api.service';
import { Content, ContentResponse } from '../../../interfaces/contentResponse.interface';
import { ContentByViews, ContentByViewsResponse } from '../../../interfaces/contentByViewsResponse.interface';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MovieBoxComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  contentByViews!: ContentByViewsResponse
  contentList!: any[]
  ready: boolean = false

  constructor(private contentApiService: ContentAPIService){}

  ngOnInit(){
    this.contentApiService.getTopContentByViews().subscribe(
      (contentByViewsRes) => {
        if(contentByViewsRes){

          this.contentByViews = contentByViewsRes
          console.log(contentByViewsRes)
          this.contentList = Array(contentByViewsRes.data.length).fill(null)

          this.contentByViews.data.forEach(
            (content, index) => {
              this.contentApiService.getContentById(content.id.toString()).subscribe(
                (contentRes) => {
                  if(contentRes){
                    this.contentList[index] = contentRes.data[0]
                  }
                }
              )
            }
          )
        }
      }
    )
    // this.ready = true
  }
}
