import {Component, inject} from '@angular/core';
import {DeportesHttpService} from "../../../services/api/deportes-http.service";
import {DeportesModel} from "../../../models/deportes.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  protected categories : DeportesModel[];
  protected deportesHttpService:DeportesHttpService = inject(DeportesHttpService);
  private router:Router = inject(Router);
  constructor() {
    this.categories = this.deportesHttpService.categories;
    console.log(this.categories);
  }

  edit(item: DeportesModel){
    this.deportesHttpService.category = item
    this.router.navigate(['page-deportes/deportes/sugerencia/', item.user])
  }
}
