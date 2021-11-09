import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {

  constructor() { }

  products = [

  ];

  category = 'all';

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.products = [
      {
        title: '일회용 젓가락 나눔',
        place: '궁동',
        date: '2021-10-10',
        quantity: 20
      },
      {
        title: '일회용 젓가락 나눔',
        place: '궁동',
        date: '2021-10-10',
        quantity: 20
      },
      {
        title: '일회용 젓가락 나눔',
        place: '궁동',
        date: '2021-10-10',
        quantity: 20
      }
    ]
  }

}
