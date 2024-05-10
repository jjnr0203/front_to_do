import { Component, inject } from '@angular/core';
import {
  AbstractControl,
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
      artist: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', [Validators.required]],
      num: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      esSingle: [false],
    }));
  }

  get name(): AbstractControl {
    return this.form.controls['name'];
  }

  get artist(): AbstractControl {
    return this.form.controls['artist'];
  }

  get description(): AbstractControl {
    return this.form.controls['description'];
  }

  get date(): AbstractControl {
    return this.form.controls['date'];
  }

  get num(): AbstractControl {
    return this.form.controls['num'];
  }

  get esSingle(): AbstractControl {
    return this.form.controls['esSingle'];
  }

  
  validateForm() {
    if (this.form.valid) {
      alert('valido');
    } else {
      alert('No valido');
    }
  }
}
