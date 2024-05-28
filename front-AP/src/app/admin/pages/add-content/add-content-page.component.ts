import { Component } from '@angular/core';
import { DropdownMenuComponent } from '../../../shared/components/dropdown-menu/dropdown-menu.component';
import { ActorsModalComponent } from '../actors-modal/actors-modal.component';
import { CommonModule } from '@angular/common';
import { ModalSwitchService } from '../../../services/modal-switch.service';

@Component({
  selector: 'app-add-content-page',
  standalone: true,
  imports: [DropdownMenuComponent, ActorsModalComponent, CommonModule],
  templateUrl: './add-content-page.component.html',
  styleUrl: './add-content-page.component.css'
})
export class AddContentPageComponent {

  constructor(private modalSS:ModalSwitchService) { 

  }

  ngOnInit() {
    this.modalSS.$modal.subscribe((value) => {
      this.modalSwitch = value;
    });
  }

  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];
  actors: string[] = ['Actor 1', 'Actor 2', 'Actor 3'];

  modalSwitch: boolean = false;


  getSelectedActors(actors: string[]) {
    console.log(actors);

  }

  openModal() {
    this.modalSwitch = true;
  }

}
