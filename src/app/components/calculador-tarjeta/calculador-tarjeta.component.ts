import { Component, OnInit } from '@angular/core';
import { DolarService } from '../../services/dolar.service';

@Component({
  selector: 'app-calculador-tarjeta',
  templateUrl: './calculador-tarjeta.component.html',
  styleUrls: ['./calculador-tarjeta.component.scss'],
})
export class CalculadorTarjetaComponent implements OnInit {
  moneda: any;
  dolarOficial: number;
  moneyUsd: number;
  convert: number = 0;
  impPais: number = 0.3;
  percGan: number = 0.45;
  pais: number = 0;
  ganancia: number = 0;
  total: number = 0;
  showResult: boolean = false;
  constructor(private dolar: DolarService) {}
  ngOnInit() {
    this.dolar.getDollar().subscribe((data) => {
      this.moneda = data;
      this.dolarOficial = parseInt(this.moneda[0].casa.venta);
    });
  }
  calcTarjeta() {
    if (this.moneyUsd === 0 || this.moneyUsd < 0) {
      alert('Ingrese una cifra valida');
      this.moneyUsd = 0;
    }
    this.convert = this.moneyUsd * this.dolarOficial;
    this.pais = this.convert * this.impPais;
    this.ganancia = this.convert * this.percGan;
    this.total = this.convert + this.pais + this.ganancia;
    this.showResult = true;
  }
}
