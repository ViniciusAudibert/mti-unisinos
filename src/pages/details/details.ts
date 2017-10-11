import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

import { Product } from '../../classes/Product'

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  public product: Product;
  map: GoogleMap;
  mapElement: HTMLElement;

  constructor(
    private googleMaps: GoogleMaps,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.product = navParams.get("product");

    this.validateProduct()
  }

  validateProduct() {
    if (!this.product || !this.product.id) {
      this.navCtrl.pop()
    }
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.mapElement = document.getElementById('map');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.product.machine.lat,
          lng: this.product.machine.lon
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: this.product.machine.lat,
            lng: this.product.machine.lon
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }
}
