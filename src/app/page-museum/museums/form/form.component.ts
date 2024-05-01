import { IfStmt } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  private formBuilder:FormBuilder = inject(FormBuilder);

  protected form: FormGroup; 

  constructor(){
this.form = this.formBuilder.group({
  name: ['', [Validators.required, Validators.maxLength(10)]],
  lastname: ['',[Validators.required]],
  numberofrooms:[0],
  years:[''],
  petfriendly:[false]

  }); 
  }

  validateForm(){
    if(this.form.valid){
      alert('Valido');
    }else{
      alert('No valido')
    }
    }
  }
  



