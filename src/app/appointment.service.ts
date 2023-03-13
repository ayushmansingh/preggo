import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  hasAppointmentBeenvisited:Boolean;
  constructor() { 
    this.hasAppointmentBeenvisited = false;
  }

  setAppointmentDate(){
    this.hasAppointmentBeenvisited = true;
  }

  getAppointmentDate(){
    return this.hasAppointmentBeenvisited;
  }
}
