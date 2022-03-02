import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
    return this.http.jsonp(this.aktivitetUrl + name, 'callback');
  }

}
