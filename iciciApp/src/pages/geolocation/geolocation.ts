import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})


export class GeolocationPage {

  @ViewChild('map') mapElement: ElementRef;
  public map: any;


  myMarker: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public geolocation: Geolocation
   ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }

  getLoca(): void {
    alert('==== get loca called '+'===>');
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      alert(resp.coords.latitude);
      this.loadMap(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
      alert('Error getting location' + error.message);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((position: any) => {
      if (position && position.coords) {

        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        alert("===== Position Changed =====" + position.coords.latitude);
      }
      // set marker position
      // this.marker.setPosition(latLng);
    }, err => {
      alert("Error=>" + err.message);
    });
  }

  loadMap(lat: any, long: any) {
    let latLng = new google.maps.LatLng(lat, long);
    console.log();
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  dismiss() {
    console.log('method modal called');
    this.viewCtrl.dismiss();
  }


  showPosition(position) {
    this.myMarker = new google.maps.Marker({
      position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      map: new google.maps.Map(document.getElementById("map")),
      icon: 'img/icons/myicon.png'
    });
  }

  // watch user's position


}
