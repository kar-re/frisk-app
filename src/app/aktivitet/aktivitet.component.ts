import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-aktivitet',
  templateUrl: './aktivitet.component.html',
  styleUrls: ['./aktivitet.component.scss']
})
export class AktivitetComponent implements OnInit {
  // aktivitet: string;
  data: any;
  title: string = "";
  constructor(  private route: ActivatedRoute,
    private router: Router, private wikipediaService: WikipediaService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.title = id;
    console.log(id);
    this.wikipediaService.getInfo(id)
    .subscribe((data: any) => {this.data = (Object.values(data.query.pages)[0]); console.log(this.data)});
  }

}
