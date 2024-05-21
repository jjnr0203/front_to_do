import { Injectable } from '@angular/core';
import { DeportesModel} from "../../models/deportes.model";

@Injectable({
  providedIn: 'root'
})
export class DeportesHttpService {
   public categories : DeportesModel[];
   public category : DeportesModel = {};
  constructor() {
    this.categories = [
      {
      user: 'JUANA',
      email: 'juan@gmail.com',
      date: new Date(),
      state: 10,
      assessment: true,
      },
      {
        user: 'CARLOS',
        email: 'carlos@gmail.com',
        date: new Date(),
        state: 20,
        assessment: false,
      },
      {
        user: 'HERNAN',
        email: 'hernan@gmail.com',
        date: new Date(),
        state: 30,
        assessment: true,
      }]

    }
  }
