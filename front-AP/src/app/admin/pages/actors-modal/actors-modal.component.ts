import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActorCheckboxComponent } from '../actor-checkbox/actor-checkbox.component';
import { ModalSwitchService } from '../../../services/modal-switch.service';

@Component({
  selector: 'admin-actors-modal',
  standalone: true,
  imports: [ActorCheckboxComponent],
  templateUrl: './actors-modal.component.html',
  styleUrl: './actors-modal.component.css'
})
export class ActorsModalComponent {
  constructor(private modalSS: ModalSwitchService) {

  }

  actors: string[] = ['actor1', 'actor2', 'actor3'];

  selectedOptions: boolean[] = Array(this.actors.length).fill(false);
  selectedActors: string[] = [];

  actorCheckbox: ActorCheckboxComponent[] = [];

  @Output()
  selectedActorsEvent: EventEmitter<string[]> = new EventEmitter<string[]>();

  

  validateCheckboxValue(value: boolean, index: number) {

    this.selectedOptions[index] = !this.selectedOptions[index];
  }

  getChecked(){
    
    this.selectedActors = [];
    for (let i = 0; i < this.selectedOptions.length; i++) {
      if(this.selectedOptions[i]){
        this.selectedActors.push(this.actors[i]);
      }
    }
    this.selectedOptions = Array(this.actors.length).fill(false);
    this.closeModal();
    this.selectedActorsEvent.emit(this.selectedActors);
  }

  closeModal() {
    this.modalSS.$modal.emit(false);
  }
    
}
