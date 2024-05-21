import { Component } from '@angular/core';

@Component({
  selector: 'actor-box',
  standalone: true,
  imports: [],
  templateUrl: './actor-box.component.html',
  styleUrl: './actor-box.component.css'
})
export class ActorBoxComponent {
  actorName: string = 'NOLAN';
  actorRole: string = 'Director';
}
