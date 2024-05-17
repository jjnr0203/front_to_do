import {Component, inject} from '@angular/core';
import {DeportesHttpService} from "../../../services/api/deportes-http.service";
import {FormGroup} from "@angular/forms";
import {deportesModel} from "../../../models/deportes.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  protected categoriesDeportes : deportesModel[];
  private deportesHttpService:DeportesHttpService = inject(DeportesHttpService);
  private router:Router = inject(Router);
  constructor() {
    this.categoriesDeportes =this.deportesHttpService.categoriesDeportes;
    console.log(this.categoriesDeportes);
  }


}
