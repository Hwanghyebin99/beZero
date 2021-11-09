import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss'],
})
export class RecommendComponent implements OnInit {

  slideOpts = {
    loop: true
  }

  shopData = [];
  
  constructor() { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.shopData = [
      {
        subtitle: '어글리솝 UglySoap',
        title: '친환경 수제 반려견 샴푸',
        cost: 15000,
        discount : 9000,
        imgSrc : ''
      }
    ]
  }

  slidesDidLoad(slides:IonSlides) {
    slides.startAutoplay()
  }
}
