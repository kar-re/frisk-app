import { Component, OnInit } from '@angular/core';
import { Aktiviteter, Aktivitet, SkatteverketService } from '../skatteverket.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  akt: Aktivitet[] = [];
  constructor(public skatteverketService: SkatteverketService) { }

  ngOnInit(): void {
    this.skatteverketService.getAktiviteter()
    .subscribe((data: Aktiviteter) => this.akt = data.results.map(obj => 
      ({skattefri: (obj as any)['skattefri förmån?'], aktivitet: (obj as any).aktivitet})
      ))
  }

}
