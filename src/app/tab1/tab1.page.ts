import { AppointmentService } from './../appointment.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isAppointmentset:Boolean;
  constructor(private appointmentService: AppointmentService) {
  }

  ionViewDidEnter(){
    this.isAppointmentset = this.appointmentService.getAppointmentDate();
  }

}
