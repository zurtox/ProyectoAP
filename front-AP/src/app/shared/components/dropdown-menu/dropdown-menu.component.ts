import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-dropdown-menu',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css'
})
export class DropdownMenuComponent {
  @Input()
  header: string = ""

  @Input()
  options: string [] = []

  @Input()
  isLeft: boolean = false

  // selectedOptions: boolean[] = [];
  @Output() selectedOptionsChange = new EventEmitter<number>();

  ngOnInit(){
    console.log("options:")
    console.log(this.options)
    console.log(this.options.length)
    // this.selectedOptions = Array(this.options.length).fill(false)
  }

  toggleOption(index: number) {
    // this.selectedOptions = Array(this.options.length).fill(false)
    // this.selectedOptions[index] = !this.selectedOptions[index];
    this.selectedOptionsChange.emit(index);
    // console.log(this.selectedOptions)
  }
}
