import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-comment-box',
  standalone: true,
  imports: [],
  templateUrl: './comment-box.component.html',
  styleUrl: './comment-box.component.css'
})
export class CommentBoxComponent {
  @Input()
  header: string = ""

  @Input()
  user: string = ""

  @Input()
  date: string = ""

  @Input()
  body: string = ""
}
