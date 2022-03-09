import { Component, ErrorHandler, NgZone} from '@angular/core';
import { ErrorService } from '../error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-erroralert',
  templateUrl: './erroralert.component.html',
  styleUrls: ['./erroralert.component.scss'],
})
export class ErroralertComponent implements ErrorHandler{

  constructor(public errorService: ErrorService, private zone: NgZone) {}

  handleError(error: any) {
    //Metod för att manuellt uppdatera
    this.zone.run(() => 
      this.errorService.handleError(error)
    )
  }

  
  
}
