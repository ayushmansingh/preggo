import { Component } from '@angular/core';
import data from "src/assets/resources.json";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  myResources:any;
  constructor() {
    this.myResources = data;
  }

}
