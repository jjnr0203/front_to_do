import { Component, inject } from '@angular/core';
import { FormBuilder,AbstractControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  private formBuilder:FormBuilder = inject(FormBuilder);
  protected form: FormGroup; 

  constructor(){
  this.form = this.formBuild

  console.log(this.form)
  console.log(this.nameField)
  }

  get formBuild(): FormGroup {
    return this.formBuilder.group({ name: [null, [Validators.required]],
      lastName: [null,[Validators.required]],
      numberRooms:[null,Validators.required],
      year:[null,Validators.required],
      petFriendly:[null,Validators.required]
    })

  }
  
  get nameField():AbstractControl {
    return this.form.controls['name'];
  }
  get lastNameField():AbstractControl {
    return this.form.controls['lastName'];
  }
  get numberRoomsField():AbstractControl {
    return this.form.controls['numberRooms'];
  }
  get yearField():AbstractControl {
    return this.form.controls['year'];
  }
  get petFriendlyField():AbstractControl {
    return this.form.controls['petFriendly'];
  }


  validateForm(){
    if(this.form.valid){
      alert('Valido');
    }else{
      alert('No valido')
    }
    }
  }