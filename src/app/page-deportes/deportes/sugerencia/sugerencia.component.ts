import { Component, inject } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrl: './sugerencia.component.scss'
})
export class SugerenciaComponent {
  private formBuilder: FormBuilder = inject(FormBuilder)
  protected sugerencia : FormGroup


  constructor(){
    this.sugerencia = this.formBuild

    console.log(this.sugerencia)
    console.log(this.userField)
  }

  get formBuild(): FormGroup {
    return this.formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email] ],
      date: [new Date(), [Validators.required]],
      state: [false, [Validators.required]],
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
    const data = this.sugerencia.value
    if(this.sugerencia.valid){
      alert('Formulario enviado');
    }else {
      alert('Revisa el formulario');
    }
  }
}


