import { Component, OnInit } from '@angular/core';
import { Aktiviteter, Aktivitet, SkatteverketService } from '../skatteverket.service';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  akt: string[] = [];
  public searchInput: any;

  constructor(public skatteverketService: SkatteverketService, private router: Router) { }

  ngOnInit(): void {
    this.getAktiviteterFromSkatteverket();
    console.log(this.akt);

  }

  searchExamples: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.akt.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  getAktiviteterFromSkatteverket() {
    this.skatteverketService.getAktiviteter()
      .subscribe((data: Aktiviteter) => data.results.map(obj =>
        (this.akt.push(obj.aktivitet))
      ));
  }

  handleClick(event: Event) {
    this.router.navigateByUrl('/resultat');
  }

}
