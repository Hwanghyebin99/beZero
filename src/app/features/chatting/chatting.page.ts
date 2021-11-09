import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.page.html',
  styleUrls: ['./chatting.page.scss'],
})
export class ChattingPage implements OnInit {
  socketData = [];

  text = '';

  constructor() { }

  ngOnInit() {
    this.initSocketData();
  }

  initSocketData() {
    this.socketData = [{
      user: 'me',
      data: '안녕하세요!!'
    },
    {
      user: 'me',
      data: '물건 받고싶어서요'
    },
    {
      user: 'other',
      data: '안녕하세욯ㅎ'
    },
    {
      user: 'other',
      data: '어떤 거 필요하세요?'
    }]
  }

  send() {
    setTimeout(()=>{
      this.socketData.push({
        user: 'me',
        data: this.text
      });
      this.text = '';
    },200);
  }
}
