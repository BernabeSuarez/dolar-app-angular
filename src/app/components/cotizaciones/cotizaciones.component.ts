import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { DolarService } from 'src/app/services/dolar.service';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.scss'],
})
export class CotizacionesComponent implements OnInit {
  results: any;
  loading: boolean;
  constructor(private route: Router, private dolar: DolarService) {
    this.loading = true;
  }
  ngOnInit(): void {
    this.dolar.getDollar().subscribe((data) => {
      this.results = data;
      this.loading = false;
    });
  }

  dolarDetail(dolar: any, nombre: string) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: dolar,
      },
    };
    this.route.navigate(['dolar/', nombre], navigationExtras);
  }
}
