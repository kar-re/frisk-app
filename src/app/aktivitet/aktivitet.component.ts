import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { WikipediaService } from '../wikipedia.service';
import { Aktiviteter, Aktivitet, SkatteverketService } from '../skatteverket.service';

@Component({
  selector: 'app-aktivitet',
  templateUrl: './aktivitet.component.html',
  styleUrls: ['./aktivitet.component.scss']
})
export class AktivitetComponent implements OnInit {
  // aktivitet: string;
  data: any;
  aktivitetsLista: Aktivitet[] = [];
  title: string = "";
  id: string = "";
  subText: string = "";

  constructor(private route: ActivatedRoute,
    private router: Router, private wikipediaService: WikipediaService, public skatteverketService: SkatteverketService) { }

  ngOnInit(): void {
    this.getAktiviteterFromSkatteverketAndRun();

  }

  doShit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    const firstWordInId = this.id.split(' ')[0];
    if (this.isInSkatteverketList()) {
      console.log("finns i listan");
      this.title = this.id;
      this.wikipediaService.getInfo(firstWordInId)
        .subscribe((data: any) => { this.data = (Object.values(data.query.pages)[0]); console.log(this.data) });

      if (this.isSkatteFritt()) {
        this.subText = `Ja, ${this.id} ingår i friskvårdsbidraget.`;
      } else {
        this.subText = `Nej, ${this.id} ingår inte i friskvårdsbidraget.`;
      }

    } else {
      console.log("finns inte i listan");
      this.title = "Hoppsan!";
      this.subText = " Du sökte på någonting som inte finns i vår eller Skatteverkets databas. Testa att söka på någonting annat eller titta i vår aktivitetslista i högra hörnet. Lycka till i jakten efter billig hälsa!";
    }
  }

  isInSkatteverketList() {
    let res = this.aktivitetsLista.find((a) => a.aktivitet.toLocaleLowerCase() === this.id.toLocaleLowerCase());
    return res;
  }

  testAktiviteter() {
    console.log(this.aktivitetsLista.filter(a => a.aktivitet));
  }

  isSkatteFritt() {
    var isSkatteFri = this.aktivitetsLista.filter((a) => a.aktivitet.toLocaleLowerCase() === this.id.toLocaleLowerCase())[0];
    if (isSkatteFri.skattefri.toLocaleLowerCase() === "ja") {
      return true;
    } else {
      return false;
    }

  }

  getAktiviteterFromSkatteverketAndRun() {
    this.skatteverketService.getAktiviteter()
      .subscribe((data: Aktiviteter) => {
        data.results.map(obj => this.aktivitetsLista.push(
          ({ skattefri: (obj as any)['skattefri förmån?'], aktivitet: (obj as any).aktivitet }))); this.doShit()
      }
      );
    /*this.skatteverketService.getAktiviteter()
      .subscribe((data: Aktiviteter) => this.akt = data.results.map(obj =>  
        ({ skattefri: (obj as any)['skattefri förmån?'], aktivitet: (obj as any).aktivitet })
      ));*/

  }
}

