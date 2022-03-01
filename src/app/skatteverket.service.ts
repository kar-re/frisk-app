import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
export interface Aktiviteter {
  skattefri: string;
  aktivitet: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkatteverketService {
  aktivitetUrl = "https://skatteverket.entryscape.net/rowstore/dataset/1429b654-11eb-401e-ae3c-0dd6b52e6c89";
  aktiviteter: Aktiviteter | undefined;

  constructor(private http: HttpClient) { }
  
  getAktiviteter() {
    return this.http.get<Aktiviteter>(this.aktivitetUrl);
  }


  
}

