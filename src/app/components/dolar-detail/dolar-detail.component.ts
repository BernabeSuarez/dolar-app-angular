import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dolar-detail',
  templateUrl: './dolar-detail.component.html',
  styleUrls: ['./dolar-detail.component.scss'],
})
export class DolarDetailComponent implements OnInit {
  dolarSelected: any | undefined;
  nombre: string | undefined;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      if (params.casa.nombre) {
        this.nombre = params.casa.nombre;
      }
    });
    if (history.state.data) {
      console.log(history.state.data);
      this.dolarSelected = history.state.data;
    }
  }
  back() {
    this.router.navigate(['cotizaciones']);
  }
}
