import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Aktivitet {
  skattefri: string;
  aktivitet: string;
}
export interface Aktiviteter {
  next: string;
  resultCount: string;
  offset: number;
  limit: number;
  queryTime: number;
  results: Aktivitet[];
}

@Injectable({
  providedIn: 'root'
})
export class SkatteverketService {
  aktivitetUrl = "https://skatteverket.entryscape.net/rowstore/dataset/1429b654-11eb-401e-ae3c-0dd6b52e6c89/json?_limit=500";
  // aktiviteter: Aktiviteter | undefined;

  constructor(private http: HttpClient) { }
  
  getAktiviteter() {
    return this.http.get<Aktiviteter>(this.aktivitetUrl).pipe(catchError((err: any) => {return throwError(() => err)}));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Fel uppstod!!!', error.error);
    } else {
      console.error(
        `Något knasar: ${error.status}, Body:`, error.error);
    }
    throw new Error('Kan inte nå Skatteverket just nu, prova lite senare!');
  }


  
}

