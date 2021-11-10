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

  myData;

  ngOnInit() {
    this.initMyData();
  }

  initMyData() {
    this.myData = JSON.parse(localStorage.getItem('user'));
  }
  
  back() {
    this.navCtrl.back();
  }
}
