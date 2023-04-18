import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { DolarDetailComponent } from './components/dolar-detail/dolar-detail.component';
import { ConversorDolarComponent } from './components/conversor-dolar/conversor-dolar.component';
import { CalculadorTarjetaComponent } from './components/calculador-tarjeta/calculador-tarjeta.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dolar/:nombre',
    component: DolarDetailComponent,
  },
  {
    path: 'convertidor',
    component: ConversorDolarComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'calculadora',
    component: CalculadorTarjetaComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'cotizaciones',
    component: CotizacionesComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
