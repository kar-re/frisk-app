import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, throwError, tap } from 'rxjs';
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
export class WikipediaService {
  aktivitetUrl = "https://sv.wikipedia.org/w/api.php?action=query&format=json&uselang=sv&prop=extracts&redirects=1&exchars=2000&titles=";
  // aktiviteter: Aktiviteter | undefined;

  constructor(private http: HttpClient) { }
  
  getInfo(name: string) {
    return this.http.jsonp(this.aktivitetUrl + name, 'callback')
      .pipe(
        tap(
          {
            next: (data: any) => {
              if (Object.keys(data.query.pages)[0] === '-1') {
                throw new Error(`Hittar ingen wikipedia-artikel för ${name.toLocaleLowerCase()}`)
              } 
            },
            error: (error) => (this.handleError(error))
          }
          )
        );
    
  }
  
  private handleError(error: any) {
    // console.error(error);
    if (error.status === 0) {
      console.error('Fel uppstod!!!', error);
    } else {
      console.error(`Fel!: ${error}`);
    }
    throw new Error(error.message);
  }

}
