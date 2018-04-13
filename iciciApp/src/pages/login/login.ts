import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Ilogin } from './login-interface'
import { HomePage } from '../home/home';

import { AuthenticationProvider } from '../../providers/authentication/authentication';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string = null;
  password: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public autheService: AuthenticationProvider) {

    console.log('i m constructor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(): void {
    //if (this.autheService.validateuser()) {
    if (this.username == 'u1' && this.password == '12') {
      this.autheService.setusername(this.username);
      this.navCtrl.setRoot(HomePage);
      alert(localStorage.getItem('email'));
    }
    console.log(this.username);
  }
}
