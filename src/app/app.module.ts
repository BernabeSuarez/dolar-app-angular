import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from '../environments/environment.firebase';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DolarDetailComponent } from './components/dolar-detail/dolar-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConversorDolarComponent } from './components/conversor-dolar/conversor-dolar.component';
import { CalculadorTarjetaComponent } from './components/calculador-tarjeta/calculador-tarjeta.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DolarDetailComponent,
    NavbarComponent,
    ConversorDolarComponent,
    CalculadorTarjetaComponent,
    CotizacionesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
