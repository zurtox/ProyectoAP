import { Component } from '@angular/core';
import { CommentBoxComponent } from '../../components/comment-box/comment-box.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ContentAPIService } from '../../../services/content-api.service';
import { ActivatedRoute } from '@angular/router';
import { CommentResponse } from '../../../interfaces/commentResponse.interface';
import { UserApiService } from '../../../services/user-api.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [NavbarComponent, CommentBoxComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  comments!: CommentResponse
  iterator: any [] = Array(4).fill(0)
  id: string = ""
  usernames: string [] = []

  constructor(private contentService: ContentAPIService,
    private route: ActivatedRoute,
    private userApi: UserApiService
  ){}

  ngOnInit(){
    this.route.params.subscribe(
      params => {
        this.id = params["id"]
        this.getComments()
      }
    )
  }

  getComments(){
    this.contentService.getReviewByContent(this.id).subscribe(
      (res) => {
        if(res!.data.length > 0){
          let userList: string [] = Array(res!.data.length).fill("")
          res!.data.forEach(
            (element, index) => {
              this.userApi.getUserById(element.user.toString()).subscribe(
                userRes => {
                  userList[index] = userRes!.data[0].username
                }
              )
            }
          )
          this.comments = res!
          this.usernames = userList
        }
      }
    )
  }
}
