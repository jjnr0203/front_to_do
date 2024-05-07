import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.scss'
})
export class AutoComponent implements OnInit {

  autoForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.autoForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      año: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.autoForm.valid) {
      console.log(this.autoForm.value);
    }
  }
}
