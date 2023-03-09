import { Component } from '@angular/core';
import data from "src/assets/journey.json";
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  myJourney:any;
  constructor() {
    this.myJourney = data;
  }

}