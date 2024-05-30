import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'shared-comment-box',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './comment-box.component.html',
  styleUrl: './comment-box.component.css'
})
export class CommentBoxComponent {
  @Input()
  user: string = ""

  @Input()
  commentDate!: Date

  @Input()
  body: string = ""

  @Input()
  starsCount: number = 0

  starsIterator: number [] = []

  ngOnInit(){
    this.starsIterator = Array(this.starsCount).fill(0)
  }
}
