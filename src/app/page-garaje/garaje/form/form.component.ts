import {Component, OnInit } from '@angular/core';
/*import { FormBuilder, FormGroup, Validators } from '@angular/forms';*/
export @Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
class FormComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
/*
  autoForm!: FormGroup;
  motoForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.motoForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      año: ['', Validators.required],
      color: ['', Validators.required]
    });
    this.autoForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      año: ['', Validators.required],
      color: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.motoForm.valid) {
      // Manejar la lógica del formulario aquí
      console.log(this.motoForm.value);
    }
    if (this.autoForm.valid) {
      console.log(this.autoForm.value);
    }

  }*/
}
