import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'admin-actor-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './actor-checkbox.component.html',
  styleUrl: './actor-checkbox.component.css'
})
export class ActorCheckboxComponent {
  @Input()
  checkboxName: string = '';




  checked: boolean = false;
  

  @Output()
  actorChecked: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleCheckbox() {
    console.log('toggleCheckbox');
    this.checked = !this.checked;
    if (this.checked) {
      this.actorChecked.emit(this.checked);
    }
  }




}
