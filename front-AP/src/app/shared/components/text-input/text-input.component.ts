import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'shared-text-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {
  @Input()
  text: string = '';

  @Input()
  entry!: string

  @Output()
  entryChange = new EventEmitter<string>();

  onTextChange(text: string){
    this.entryChange.emit(text)
  }
}
