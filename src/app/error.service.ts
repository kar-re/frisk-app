import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errorsLog: any[] = [];

  handleError(error: Error | HttpErrorResponse) {
    // console.log("PUSH PUSH");
    this.errorsLog.push(error.message);
    // console.log(this.errorsLog);
  }
  getErrors(): any[] {
    return this.errorsLog;
  }
  remove(error: any) {
    this.errorsLog = this.errorsLog.filter(t => t != error);
  }

}
