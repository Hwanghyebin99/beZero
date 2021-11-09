import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.page.html',
  styleUrls: ['./mypage.page.scss'],
})
export class MypagePage implements OnInit {
  constructor(
    private navCtrl: NavController
  ) {}

  socketData;

  ngOnInit() {
  }

  
  back() {
    this.navCtrl.back();
  }
}
