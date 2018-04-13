import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { MenPage } from '../../pages/men/men';
import { SeachModalPage } from '../../pages/seach-modal/seach-modal';
import { GeolocationPage } from '../../pages/geolocation/geolocation';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({ 
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input('title') title : string;

  constructor(private cdr: ChangeDetectorRef,public modalCtrl: ModalController, public navCtrl: NavController) {
    console.log('Hello HeaderComponent Component');    
  }
  ngAfterViewInit(): void{
    this.cdr.detectChanges();
  }
  check(path: string): void{
    console.log('clicked!!!',path);
    // this.navCtrl.push(MenPage);
    if(path == 'search' ){
      let searchModal = this.modalCtrl.create(SeachModalPage, { userId: 8675309 });
      searchModal.present();
    }
    else if(path == 'notification'){
      let geolocation = this.modalCtrl.create(GeolocationPage, { userId: 8675309 });
      geolocation.present();
    }
    
  }
}
