import { Component, inject } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeportesModel} from "../../../models/deportes.model";
import {DeportesHttpService} from "../../../services/api/deportes-http.service";


@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrl: './sugerencia.component.scss'
})
export class SugerenciaComponent {
  private formBuilder: FormBuilder = inject(FormBuilder)
  protected sugerencia : FormGroup

  category: DeportesModel;
  private deportesHttpService:DeportesHttpService = inject(DeportesHttpService);

  constructor(){
    this.sugerencia = this.formBuild
    this.category = this.deportesHttpService.category;
    this.sugerencia.patchValue(this.deportesHttpService.category);

     console.log(this.sugerencia)
    console.log(this.userField)
  }

  get formBuild(): FormGroup {
    return this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^.+@gmail\.com$/)] ],
      date: [new Date(), [Validators.required]],
      state: [false, [Validators.required, ]],
      assessment: [0,[Validators.required]],
    })
  }

  get userField():AbstractControl {
    return this.sugerencia.controls['user'];
  }
  get emailField():AbstractControl {
    return this.sugerencia.controls['email'];
  }
  get dateField():AbstractControl {
    return this.sugerencia.controls['date'];
  }
  get stateField():AbstractControl {
    return this.sugerencia.controls['state'];
  }
  get assessmentField():AbstractControl {
    return this.sugerencia.controls['assessment'];
  }

  validate() {
    this.sugerencia.markAllAsTouched();
    if(this.sugerencia.valid){
      alert('Formulario enviado');
      console.log(this.sugerencia.value)
    }else {
      alert('Revisa el formulario');
    }
  }
}


