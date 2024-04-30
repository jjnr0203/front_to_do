import { Component } from '@angular/core';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.scss'
})
export class VehiculosComponent {
  marca: string;
  modelo: string;
  año: number;
  precio: number;

  constructor(marca: string, modelo: string, año: number, precio: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.precio = precio;
  }

  // Métodos de ejemplo
  calcularImpuesto(): number {
    // Lógica para calcular el impuesto basado en el precio, por ejemplo
    return this.precio * 0.1;
  }

  describirVehiculo(): string {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Precio: ${this.precio}`;
  }
}
