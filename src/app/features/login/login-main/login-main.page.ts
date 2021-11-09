import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.page.html',
  styleUrls: ['./login-main.page.scss'],
})
export class LoginMainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['tabs/tab1']);
  }

}
