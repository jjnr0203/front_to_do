import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrl: './moto.component.scss'
})
export class MotoComponent implements OnInit {

  // Aquí podrías definir propiedades y métodos para tu componente

  motos: string[] = ['Yamaha', 'Honda', 'Suzuki', 'Kawasaki'];

  constructor() { }

  ngOnInit(): void {
  }

}
