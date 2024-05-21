import { Component, OnInit } from '@angular/core';
/*import { FormBuilder, FormGroup, Validators } from '@angular/forms';*/

/*
interface Auto {
  marca: string;
  modelo: string;
  añoA: string;
  color: string;
}

interface Moto {
  marca: string;
  modelo: string;
  añoM: string;
  color: string;
}
*/
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
/*
  autos: Auto[] = [];
  autosForm: FormGroup[] = [];

  motos: Moto[] = [];
  motosForm: FormGroup[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Inicializar un formulario para cada auto existente
    this.autos.forEach(auto => {
      this.autosForm.push(this.createAutoForm(auto));
    });

    // Inicializar un formulario para cada moto existente
    this.motos.forEach(moto => {
      this.motosForm.push(this.createMotoForm(moto));
    });
  }

  createAutoForm(auto: Auto): FormGroup {
    return this.fb.group({
      marca: [auto.marca, Validators.required],
      modelo: [auto.modelo, Validators.required],
      añoA: [auto.añoA, Validators.required],
      color: [auto.color, Validators.required]
    });
  }

  createMotoForm(moto: Moto): FormGroup {
    return this.fb.group({
      marca: [moto.marca, Validators.required],
      modelo: [moto.modelo, Validators.required],
      añoM: [moto.añoM.toString(), Validators.required],
      color: [moto.color, Validators.required]
    });
  }

  addAuto() {
    this.autos.push({ marca: '', modelo: '', añoA: '', color: '' });
    this.autosForm.push(this.createAutoForm({ marca: '', modelo: '', añoA: '', color: '' }));
  }

  addMoto() {
    this.motos.push({ marca: '', modelo: '', añoM: '', color: '' });
    this.motosForm.push(this.createMotoForm({ marca: '', modelo: '', añoM: '', color: '' }));
  }

  submitAuto(index: number) {
    const autoForm = this.autosForm[index];
    if (autoForm.valid) {
      const autoData = autoForm.value;
      console.log('Enviando formulario de auto:', autoData);
    }
  }

  submitMoto(index: number) {
    const motoForm = this.motosForm[index];
    if (motoForm.valid) {
      const motoData = motoForm.value;
      console.log('Enviando formulario de moto:', motoData);
    }
  }*/
}




