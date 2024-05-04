// @ts-ignore

import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrl: './sugerencia.component.scss'
})
export class SugerenciaComponent {
  private formBuilder: FormBuilder = inject(FormBuilder)
  protected sugerencia : FormGroup


  constructor(){
    this.sugerencia = this.formBuilder.group({
      usuario: [null, Validators.required, Validators.minLength(3), Validators.maxLength(10)],
      correo: [null, Validators.required, Validators.minLength(10), Validators.maxLength(20)],
      date: [null, Validators.required],
      valoracion: [null, Validators.required],
      estado: [null, Validators.required],
    })
  }
}

