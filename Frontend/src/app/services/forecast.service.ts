import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ForecastByDateModel } from '../models/forecast-model';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  getLatestForecast(): Observable<ForecastByDateModel[]> {
    return this.http.get<ForecastByDateModel[]>(`${environment.apiUrl}/latestForecast`);
  }

  getForecastByFilter(params: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/filterForecast`, { params });
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain info about what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => 'Something bad happened; please try again later.')
  }
}



