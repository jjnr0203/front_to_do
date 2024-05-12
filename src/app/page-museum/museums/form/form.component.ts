import { Component, inject } from '@angular/core';
import { FormBuilder,AbstractControl,FormGroup, Validators, MinLengthValidator } from '@angular/forms';

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
    return this.formBuilder.group
    ({ name: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null,[Validators.required, Validators.minLength(3)]],
      numberRooms:[null,[Validators.required, Validators.min(1), Validators.max(10)]],
      year:[null,[Validators.required, Validators.max(2024-5-31)]],
      petFriendly:[false,Validators.requiredTrue]
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