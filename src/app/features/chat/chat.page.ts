import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {}

  socketData;

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.socketData = [
      {
        user: 'me',
        data: '나는 바보'
      }
    ]
  }

  chat() {
    this.router.navigate(['chatting']);
  }
  
  back() {
    this.navCtrl.back();
  }
}
