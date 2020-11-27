import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  edad = 0;
  altura = 0;
  peso = 0;
  genero = "";
  imc = 0.0;
  constructor() { 

  }

  calculateImc(){
    //su logica aqui
    //this.imc = imc(altura,peso);

  }
  ngOnInit(): void {
  }


  getAge():Array<any> {
      return new Array(32).fill(0).map((x,i)=>i+1);
  }

  getEstatura():Array<any> {
    return new Array(221).fill(0).map((x,i)=>i+1);
}
}
