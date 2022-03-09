import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Aktiviteter, Aktivitet, SkatteverketService } from '../skatteverket.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  akt: Aktivitet[] = [];
  activityList: string[] = []; 
  randomWord: string = '';
  constructor(public skatteverketService: SkatteverketService) { }

  ngOnInit(): void {
    /*let test = this.skatteverketService.getAktiviteter()
    .subscribe((data: Aktiviteter) => this.akt = data.results.map(obj => 
      ( {skattefri: (obj as any)['skattefri förmån?'], aktivitet: (obj as any).aktivitet})
      ))*/
    this.skatteverketService.getAktiviteter()
    .subscribe(x => {
      x.results.map(obj => {
          if((obj as any)['skattefri förmån?'] === 'Ja' || (obj as any)['skattefri förmån?'] === 'ja' ) {
            this.activityList.push(obj.aktivitet);
            //this.randomWord = generateActivity(this.activityList);
            //
          }
        })
      });
      // console.log('Längd: ' + this.activityList.length);
      
  }
  buttonClick() {
    this.randomWord = this.generateActivity(this.activityList);
  }
  generateActivity(list: string[]) {
    let random = list.length;
    let randomIndex = Math.floor(Math.random() * random);
    return list[randomIndex];
  }

}

 

