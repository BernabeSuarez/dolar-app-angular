import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Info } from 'src/models/dolar.interface';

@Injectable({
  providedIn: 'root',
})
export class DolarService {
  url: string = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
  constructor(private http: HttpClient) {}
  getDollar(): Observable<Info> {
    return this.http.get<Info>(this.url);
  }
}
