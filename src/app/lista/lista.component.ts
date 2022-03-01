import { Component, OnInit } from '@angular/core';
import { Aktiviteter, SkatteverketService } from '../skatteverket.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  akt: Aktiviteter | undefined;
  constructor(public skatteverketService: SkatteverketService) { }

  ngOnInit(): void {
    this.skatteverketService.getAktiviteter()
    .subscribe((data: Aktiviteter) => this.akt = { skattefri: (data as any).skattefri, aktivitet: (data as any).aktivitet,});
  }

}
