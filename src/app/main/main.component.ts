import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Auto {
  marca: string;
  modelo: string;
  anioA: string;
  color: string;
}

interface Moto {
  marca: string;
  modelo: string;
  anioM: string;
  color: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  autos: Auto[] = [];
  autosForm: FormGroup[] = [];

  motos: Moto[] = [];
  motosForm: FormGroup[] = [];

  private _autoForm!: FormGroup;
  private _motoForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this._motoForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anioM: ['', Validators.required],
      color: ['', Validators.required]
    });
    this._autoForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anioA: ['', Validators.required],
      color: ['', Validators.required]
    });

    // Aquí puedes inicializar tus datos de autos y motos si es necesario
    this.autos.push({ marca: '', modelo: '', anioA: '', color: '' });
    this.motos.push({ marca: '', modelo: '', anioM: '', color: '' });

    // Inicializar un formulario para cada auto existente
    this.autos.forEach(auto => {
      this.autosForm.push(this.createAutoForm(auto));
    });

    // Inicializar un formulario para cada moto existente
    this.motos.forEach(moto => {
      this.motosForm.push(this.createMotoForm(moto));
    });
  }

  get autoForm(): FormGroup {
    return this._autoForm;
  }

  set autoForm(value: FormGroup) {
    this._autoForm = value;
  }

  get motoForm(): FormGroup {
    return this._motoForm;
  }

  set motoForm(value: FormGroup) {
    this._motoForm = value;
  }

  onSubmit(type: string) {
    if (type === 'auto') {
      if (this.autoForm.valid) {
        this.autos.push(this.autoForm.value);
        this.autosForm.push(this.createAutoForm({ marca: '', modelo: '', anioA: '', color: '' }));
      }
    } else if (type === 'moto') {
      if (this.motoForm.valid) {
        this.motos.push(this.motoForm.value);
        this.motosForm.push(this.createMotoForm({ marca: '', modelo: '', anioM: '', color: '' }));
      }
    }
  }

  createAutoForm(auto: Auto): FormGroup {
    return this.fb.group({
      marca: [auto.marca, Validators.required],
      modelo: [auto.modelo, Validators.required],
      anioA: [auto.anioA, Validators.required],
      color: [auto.color, Validators.required]
    });
  }

  createMotoForm(moto: Moto): FormGroup {
    return this.fb.group({
      marca: [moto.marca, Validators.required],
      modelo: [moto.modelo, Validators.required],
      anioM: [moto.anioM.toString(), Validators.required],
      color: [moto.color, Validators.required]
    });
  }

  addAuto() {
    this.autos.push({ marca: '', modelo: '', anioA: '', color: '' });
    this.autosForm.push(this.createAutoForm({ marca: '', modelo: '', anioA: '', color: '' }));
  }

  addMoto() {
    this.motos.push({ marca: '', modelo: '', anioM: '', color: '' });
    this.motosForm.push(this.createMotoForm({ marca: '', modelo: '', anioM: '', color: '' }));
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
  }
}
