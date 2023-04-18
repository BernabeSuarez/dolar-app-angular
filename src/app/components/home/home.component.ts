import { Component, OnInit } from '@angular/core';
import { DolarService } from 'src/app/services/dolar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  moneda: any;
  dolarOficial: number;
  usuario: string | null;
  constructor(private dolar: DolarService) {}

  ngOnInit(): void {
    this.dolar.getDollar().subscribe((data) => {
      this.moneda = data;
      this.dolarOficial = parseInt(this.moneda[0].casa.venta);
    });
    this.usuario = localStorage.getItem('user');
  }
}
