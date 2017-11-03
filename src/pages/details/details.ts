import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
} from '@ionic-native/google-maps'

import { Product } from '../../classes/Product'
import { Machine } from '../../classes/Machine'

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  public product: Product
  public machine: Machine
  private map: GoogleMap
  private mapElement: HTMLElement

  constructor(
    private googleMaps: GoogleMaps,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.product = navParams.get("product")
    this.machine = navParams.get("machine")
  }

  ionViewDidLoad() {
    this.loadMap()
  }

  ionViewWillLeave() {
    if (this.map) this.map.destroy()
  }

  private loadMap(): void {
    this.mapElement = document.getElementById('map')

    this.map = this.googleMaps.create(this.mapElement, this.getMapOptions())

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => this.onMapReady())
  }

  private onMapReady(): void {
    this.map.addMarker({
      title: 'Ionic',
      icon: 'green',
      animation: 'DROP',
      position: {
        lat: this.machine.lat,
        lng: this.machine.lon
      }
    })
      .then(marker => {
        marker.on(GoogleMapsEvent.MARKER_CLICK)
          .subscribe(() => { })
      })
  }

  private getMapOptions(): GoogleMapOptions {
    return {
      camera: {
        target: {
          lat: this.machine.lat,
          lng: this.machine.lon,
        },
        zoom: 15,
        tilt: 30
      }
    }
  }
}
