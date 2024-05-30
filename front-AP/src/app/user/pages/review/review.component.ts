import { Component } from '@angular/core';
import { ContentAPIService } from '../../../services/content-api.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  starIterator = Array(5).fill(0);
  reviewText: string = '';
  stars: number = 0;
  id: string = '';

  constructor(private contentApi: ContentAPIService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.route.params.subscribe(
      params => {
        this.id = params["id"]
      }
    )
  }

  getState(index: number) {
    for (let i = 0; i <= index; i++) {
      const element = document.getElementById(i.toString());
      if (element) {
        element.style.color = 'yellow';
        this.stars = i + 1;
      }
    }
  }

  resetState() {
    for (let i = 0; i < this.starIterator.length; i++) {
      const element = document.getElementById(i.toString());
      if (element) {
        element.style.color = 'white';
      }
    }
  }

  addReview(){
    this.contentApi.addReview(
      this.id,
      this.reviewText,
      this.stars
    ).subscribe(
      res => {
        console.log(res)
      }
    )
  }
}
