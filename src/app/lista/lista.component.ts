import { Component, OnInit } from '@angular/core';
import { Aktiviteter, Aktivitet, SkatteverketService } from '../skatteverket.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  akt: Aktivitet[] = [];
  error : any;
  constructor(public skatteverketService: SkatteverketService) { }

  ngOnInit(): void {
    this.skatteverketService.getAktiviteter()
    .subscribe({next: (data: Aktiviteter) => this.akt = data.results.map(obj => 
      ({skattefri: (obj as any)['skattefri förmån?'], aktivitet: (obj as any).aktivitet})
      ), error: (err: any) => {
        this.error = "Något gick fel, försök senare!"; 
      }
    });
  }
 

}
