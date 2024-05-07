import { Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  private formBuilder: FormBuilder = inject(FormBuilder)

  protected form: FormGroup;

  constructor(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required, Validators.minLength(3), Validators.maxLength(10)],
      lastname: [null, Validators.required, Validators.minLength(10), Validators.maxLength(20)],
      numberofrooms: [null, Validators.required],
      years: [null, Validators.required],
      petfriendly: [null, Validators.required],
    })
  }

  validateForm() {
    if (this.form.valid) {
      alert('Válido');
    } else {
      alert('No válido');
    }
  }
}
