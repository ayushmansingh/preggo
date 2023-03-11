import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private appointmentSet$ = new BehaviorSubject<any>({});
  selectedDate$ = this.appointmentSet$.asObservable();
  constructor() { }

  setAppointmentDate(appointmentSet:any){
    this.appointmentSet$.next(appointmentSet);
  }
}
