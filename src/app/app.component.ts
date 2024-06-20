import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  dadoIzquierdo = '../assets/img/dice1.png';
  dadoDerecho = '../assets/img/dice5.png';

  numero1: number = 1;
  numero2: number = 2;

  tirarDados() {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;


    this.dadoIzquierdo = '../assets/img/dice' + this.numero1 +'.png'
    this.dadoDerecho = '../assets/img/dice' + this.numero2 +'.png'
  }


}
