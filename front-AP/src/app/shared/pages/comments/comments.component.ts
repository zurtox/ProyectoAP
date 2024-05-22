import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommentBoxComponent } from '../comment-box/comment-box.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [NavbarComponent, CommentBoxComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

}
