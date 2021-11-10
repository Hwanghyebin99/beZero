import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.page.html',
  styleUrls: ['./login-main.page.scss'],
})
export class LoginMainPage implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,  
    public ngZone: NgZone) {
  }
  ngOnInit() {
  }

  login() {
    this.authService.GoogleAuth();
  }

}
