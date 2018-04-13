import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AuthenticationProvider } from '../../providers/authentication/authentication'
import { LoginPage } from '../login/login';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthenticationProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  logout(){
    this.authService.removeUsername();
    this.navCtrl.setRoot(LoginPage);
  }
}
