import { Component, Input } from '@angular/core';

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
}
