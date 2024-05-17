import { Injectable } from '@angular/core';
import {deportesModel} from "../../models/deportes.model";

@Injectable({
  providedIn: 'root'
})
export class DeportesHttpService {
   public categoriesDeportes : deportesModel[];

  constructor() {
    this.categoriesDeportes = [
      {
      user: '1',
      email: 'algo@gmail.com',
      date: new Date(),
      state: 0,
      assessment: true,
      },
      {
        user: '10',
        email: 'a2lgo@gmail.com',
        date: new Date(),
        state: 0,
        assessment: true,
      },
      {
        user: '11',
        email: 'algo@gmail.com',
        date: new Date(),
        state: 0,
        assessment: true,
      }]

    }
  }
