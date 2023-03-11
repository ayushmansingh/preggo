import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { async } from 'rxjs';
import data from "src/assets/resources.json";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  myResources:any[];
  constructor() {
    this.myResources = data;
  }

  async openBrowser(i:any){
    console.log(this.myResources[i].url);
      await Browser.open({ url: this.myResources[i].url });
  }

}
