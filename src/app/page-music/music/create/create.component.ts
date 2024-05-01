import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  private formBuilder = inject(FormBuilder);
 //protected nameControl: FormControl = new FormControl<string>('');
 //protected artistaControl: FormControl = new FormControl<string>('');

  protected form: FormGroup;

  constructor() {
    this.form = this.buildForm;
  }

  get buildForm(): FormGroup {
    return (this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      artista: ['', [Validators.required, Validators.minLength(2)]],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      date:['',[Validators.required]],
      num:['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      esSingle : [false]        
    }));
  }

  validateForm() {
    if (this.form.valid) {
      alert('valido');
    } else {
      alert('No valido');
    }
  }
}
