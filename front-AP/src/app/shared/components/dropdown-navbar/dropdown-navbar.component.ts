import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-dropdown-navbar',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './dropdown-navbar.component.html',
  styleUrl: './dropdown-navbar.component.css'
})
export class DropdownNavbarComponent {

  @Input()
  header: string = ""

  @Input()
  options: string [][] = []

  @Input()
  userPhoto: string = ''

  ngOnInit(){
    console.log("options:")
    console.log(this.options)
    console.log(this.options.length)
  }

}
