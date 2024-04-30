import { Component } from '@angular/core';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { MotosComponent } from './motos/motos.component';

@Component({
  selector: 'app-concecionaria',
  templateUrl: './concecionaria.component.html',
  styleUrl: './concecionaria.component.scss'
})
export class ConcecionariaComponent {
  vehiculos: VehiculosComponent[] = [];
  motos: MotosComponent[] = [];

  constructor() {
    // Aquí puedes inicializar tus vehículos y motos
    this.vehiculos.push(new VehiculosComponent('Toyota', 'Corolla', 2022, 25000));
    this.motos.push(new MotosComponent('Honda', 'CBR', 2021, 15000));
  }

  }

