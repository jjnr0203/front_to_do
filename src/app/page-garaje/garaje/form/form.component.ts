import { Component } from '@angular/core';

class Automovil {
  marca: string | undefined;
  modelo: string | undefined;
  anio: number | undefined;
  color: string | undefined;

  constructor(marca: string, modelo: string, anio: number, color: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  automovil: Automovil = new Automovil('', '', 0, ''); // Inicialización del objeto Automovil con valores predeterminados
auto: any;

  constructor() {}

  onSubmit(): void {
    console.log('Automóvil guardado:', this.automovil);
    // Puedes realizar otras acciones aquí, como enviar los datos a un servidor
  }
}
