import { Component, Input } from '@angular/core';
import { Person } from '../../../interfaces/personResponse.interface';
import { ContentAPIService } from '../../../services/content-api.service';

@Component({
  selector: 'shared-actor-box',
  standalone: true,
  imports: [],
  templateUrl: './actor-box.component.html',
  styleUrl: './actor-box.component.css'
})
export class ActorBoxComponent {
  @Input()
  favorite: boolean = false;

  @Input()
  remove: boolean = false;

  @Input()
  buy: boolean = false;

  @Input()
  person!: Person

  @Input()
  name: string = ""

  @Input()
  role: string = ""

  @Input()
  image: string = ""

  constructor(private contentApi: ContentAPIService){}

  deletePerson(){
    this.contentApi.deletePerson(this.person.id.toString()).subscribe(
      response => {
        if(response) {
          console.log('Person deleted')
        }
      }
    )
  }
}
