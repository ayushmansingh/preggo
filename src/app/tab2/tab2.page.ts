import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
import data from "src/assets/community.json";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  myCommunity:any[];
  constructor() {
    this.myCommunity = data;
  }

  openBrowser(i:any){
    console.log(this.myCommunity[i].url);
    const openCapacitorSite = async () => {
      await Browser.open({ url: this.myCommunity[i].url });
    };
  }

}
