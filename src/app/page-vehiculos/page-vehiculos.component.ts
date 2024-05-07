import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-page-vehiculos',
  templateUrl: './page-vehiculos.component.html',
  styleUrl: './page-vehiculos.component.scss'
})
export class PageVehiculosComponent implements OnInit{

  formData: any = {}; // Objeto para almacenar los datos del formulario
  formGroup!: FormGroup; // FormGroup para manejar el formulario

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Construye el FormGroup y define la estructura del formulario
    this.formGroup = this.formBuilder.group({
      nombre: [''] // Define el campo "nombre" del formulario
      // Añade más campos de formulario aquí según necesites
    });
    }
    onSubmit() {
      // Maneja la lógica cuando el formulario se envía
      console.log(this.formData); // Aquí puedes enviar los datos del formulario al servidor u otra lógica
    }

}
