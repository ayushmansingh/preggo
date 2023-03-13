import { Component } from '@angular/core';
import data from "src/assets/support.json";
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

  public cardClicked:boolean = false;
  public cardNumber:number;
  myResources:any[];
  constructor() { 
    this.myResources = data;
  }

  cardIsClicked(i: number) {
    this.cardClicked = true;
    this.cardNumber = i;
  }
  cardIsNotClicked(){
    this.cardClicked = false;
  }

}
