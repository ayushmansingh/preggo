import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { NavController } from '@ionic/angular';
import data from "src/assets/community.json";
import { CommentService } from '../comment.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  myCommunity:any[];
  constructor(public navCtrl: NavController, private commentService : CommentService) {
    this.myCommunity = data;
  }

  openPost(i:any){
    this.commentService.setId(i);
    this.navCtrl.navigateForward(['post']);
  }

}
