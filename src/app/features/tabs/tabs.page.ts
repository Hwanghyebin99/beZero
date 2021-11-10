import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  bottomTab = true;

  ngOnInit() {
    this.subscribeRoute();
  }

  subscribeRoute() {
    this.activatedRoute.url.subscribe((url)=> {
      if(this.router.url==='/chatting') {
        this.bottomTab = false;
      } else {
        this.bottomTab= true;
      }
    })
  }

}
