import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
email: string;
pass: string;
  constructor() { }

  ngOnInit() {
  }

signIn(){
 console.log('Email: ' + this.email, 'Password: ' + this.pass);
}


}
