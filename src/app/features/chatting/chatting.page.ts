import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.page.html',
  styleUrls: ['./chatting.page.scss'],
})
export class ChattingPage implements OnInit {
  socketData = [];

  chatInfo = null;

  text = '';

  userId;
  
  private roomId: string;

  constructor(route: ActivatedRoute,private navCtrl: NavController) {
    this.roomId = route.snapshot.queryParams['roomId'];
   }

  ngOnInit() {
    this.initSocketData();
    this.userId = JSON.parse(localStorage.getItem('user')).displayName;
    firebase.database().ref(`rooms/`).child(this.roomId).child('messages').on('value',(resp)=>{
      this.socketData = this.snapshotToArray(resp);
    })
  }

  snapshotToArray = (snapshot: any) => {
    const returnArr = [];
  
    snapshot.forEach((childSnapshot: any) => {
        const item = childSnapshot.val();
        returnArr.push(item);
    });
  
    return returnArr;
  };

  initSocketData() {
    firebase.database().ref(`rooms/`).child(this.roomId).child('info').get().then((resp)=>{
      this.chatInfo = resp.val();
      console.log(resp.val());
    });
    firebase.database().ref(`rooms/`).child(this.roomId).child('messages').get().then((resp)=>{
      this.socketData = this.snapshotToArray(resp);
    });
  }

  send() {
    firebase.database().ref(`rooms/`).child(this.roomId).child('messages').push({
      user: this.userId,
      message: this.text
    },(resp)=>{

    });
  }

  back() {
    this.navCtrl.back();
  }
}
