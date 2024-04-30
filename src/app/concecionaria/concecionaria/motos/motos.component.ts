import { Component } from '@angular/core';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrl: './motos.component.scss'
})
export class MotosComponent {
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

  describirMoto(): string {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Precio: ${this.precio}`;
  }
}
