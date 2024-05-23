import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-actor-box',
  standalone: true,
  imports: [],
  templateUrl: './actor-box.component.html',
  styleUrl: './actor-box.component.css'
})
export class ActorBoxComponent {
  @Input()
  name: string = ""

  @Input()
  role: string = ""

  @Input()
  image: string = ""

}
