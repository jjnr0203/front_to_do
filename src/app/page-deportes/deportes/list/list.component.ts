import {Component, inject} from '@angular/core';
import {DeportesHttpService} from "../../../services/api/deportes-http.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private deportesHttpService:DeportesHttpService = inject(DeportesHttpService);
  id:any;
  constructor() {
    this.id = this.deportesHttpService.id;
  }
}
