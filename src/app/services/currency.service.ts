import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private http: HttpClient) {
  }

  public get(path: string, params?: any): Observable<any> {
    return this.http.get(`${path}`, {params: params});
  }
}
