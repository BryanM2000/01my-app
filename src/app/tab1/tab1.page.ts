import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}


  ngOnInit() {

    let numero = 90;

    // debugger siempre temporal, cuando ya no lo necesito borrarlo
    //me ayuda a llegar directo a este punto en el navegador
    //debugger; 

    numero = 20;

    numero = numero +30;

    numero = 0;

    console.log(numero);
    
  }

}
