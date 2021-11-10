import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import firebase from 'firebase/compat/app';

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

  /**
   * 채팅 방 리스트
   */
  chatRoomList = [];

  /**
   * 유저 uid
   */
  userUid;

  ngOnInit() {
    this.userUid= JSON.parse(localStorage.getItem('user')).uid;
    this.initData();
  }

  snapshotToArray = (snapshot: any) => {
    const returnArr = [];
  
    snapshot.forEach((childSnapshot: any) => {
        const item = childSnapshot.val();
        returnArr.push(item);
    });
  
    return returnArr;
  };

  initData() {
    firebase.database().ref(`users/${this.userUid}`).get().then((resp)=>{
      this.chatRoomList = this.snapshotToArray(resp);
    });
  }

  chat(value) {
    this.router.navigate([`chatting`], { queryParams: { roomId: value } });
  }
  
  back() {
    this.navCtrl.back();
  }
}
