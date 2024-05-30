import { Component } from '@angular/core';
import { DropdownMenuComponent } from '../../../shared/components/dropdown-menu/dropdown-menu.component';
import { CommonModule } from '@angular/common';
import { ModalSwitchService } from '../../../services/modal-switch.service';
import { ActorsModalComponent } from '../actors-modal/actors-modal.component';
import { S3ApiService } from '../../../services/s3-api.service';
import { ContentAPIService } from '../../../services/content-api.service';
import { UserApiService } from '../../../services/user-api.service';
import { FormsModule } from '@angular/forms';
import { PersonResponse } from '../../../interfaces/personResponse.interface';


@Component({
  selector: 'app-add-content-page',
  standalone: true,
  imports: [FormsModule, DropdownMenuComponent, ActorsModalComponent, CommonModule],
  templateUrl: './add-content-page.component.html',
  styleUrl: './add-content-page.component.css'
})
export class AddContentPageComponent {

  categories: string[] = [];
  actorsList: [] = [];
  categoriesInput: string = '';
  actorsInput: string = '';
  dateInput: string = '';
  titleInput: string = '';
  durationInput: string = '';
  priceInput: string = '';

  personResponse!: PersonResponse


  constructor(private s3ApiService: S3ApiService, 
    private contentAPIService: ContentAPIService,
    private userApi: UserApiService,
    private modalSS:ModalSwitchService) { 

  }

  ngOnInit() {
    this.modalSS.$modal.subscribe((value) => {
      this.modalSwitch = value;
    });

    this.getActors();
    this.getCategories();
  }


  modalSwitch: boolean = false;

  getActors(){
    this.contentAPIService.getAllPersons().subscribe(
      (response) => {
        if (response){
          this.personResponse = response;
        }
        else{
          console.log('Error al cargar actores');
        }
      }
    )
  }

  getCategories(){
    this.contentAPIService.getAllCategories().subscribe(
      (response) => {
        if (response){
          for (let i = 0; i < response.data.length; i++) {
            this.categories.push(response.data[i].name);
          }
        }
        else{
          console.log('Error al cargar categorias');
        }
      }
    )
  }

  


}
