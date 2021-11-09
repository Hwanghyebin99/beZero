import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barter',
  templateUrl: './barter.component.html',
  styleUrls: ['./barter.component.scss'],
})
export class BarterComponent implements OnInit {

  constructor() { }

  products = [

  ];

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.products = [
      {
        title: '우유병과 박스 교환 원해요~',
        place: '궁동',
        date: '2021-10-10',
        quantity: 20
      }
    ]
  }

}
