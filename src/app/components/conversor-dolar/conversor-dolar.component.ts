import { Component, OnInit } from '@angular/core';
import { DolarService } from '../../services/dolar.service';

@Component({
  selector: 'app-conversor-dolar',
  templateUrl: './conversor-dolar.component.html',
  styleUrls: ['./conversor-dolar.component.scss'],
})
export class ConversorDolarComponent implements OnInit {
  moneda: any;
  dolarOficial: number;
  moneyUsd: number;
  convert: number = 0;
  showUsd: number = 0;
  showResult: boolean = false;
  selectedMoney: boolean = true;

  constructor(private dolar: DolarService) {}
  ngOnInit(): void {
    this.dolar.getDollar().subscribe((data) => {
      this.moneda = data;
      this.dolarOficial = parseInt(this.moneda[0].casa.venta);
    });
  }

  convertArsToUsd() {
    if (this.moneyUsd === 0 || this.moneyUsd < 0) {
      alert('Ingrese una cifra valida');
      this.moneyUsd = 0;
    }
    this.convert = this.moneyUsd / this.dolarOficial;
    this.showUsd = this.moneyUsd;
    this.showResult = true;
  }
  convertUsdToArs() {
    if (this.moneyUsd === 0 || this.moneyUsd < 0) {
      alert('Ingrese una cifra valida');
      this.moneyUsd = 0;
    }
    this.convert = this.moneyUsd * this.dolarOficial;
    this.showUsd = this.moneyUsd;
    this.showResult = true;
  }
  choseMoney() {
    this.selectedMoney = !this.selectedMoney;
    this.moneyUsd = 0;
    this.convert = 0;
    this.showUsd = 0;
  }
  pesoDolar() {
    this.selectedMoney = true;
    this.moneyUsd = 0;
    this.convert = 0;
    this.showUsd = 0;
  }
  dolarPeso() {
    this.selectedMoney = false;
    this.moneyUsd = 0;
    this.convert = 0;
    this.showUsd = 0;
  }
}
