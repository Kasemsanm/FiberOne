import { Component, ViewChild, ElementRef } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

import { Platform } from 'ionic-angular';


declare var google: any;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public confData: ConferenceData, public platform: Platform) {
  }

  ionViewDidLoad() {

      this.confData.getMap().subscribe((mapData: any) => {
        let mapEle = this.mapElement.nativeElement;

        let map = new google.maps.Map(mapEle, {
          zoom: 10,
          center: new google.maps.LatLng(13.736717, 100.523186),
          mapTypeId: 'roadmap',
          styles: [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
            ]
        });

        mapData.forEach((markerData: any) => {
          let infoWindow = new google.maps.InfoWindow({
            content: `<h5>${markerData.name}</h5>`
          });

          let marker = new google.maps.Marker({
            position: markerData,
            map: map,
            title: markerData.name
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

        google.maps.event.addListenerOnce(map, 'idle', () => {
          mapEle.classList.add('show-map');
        });

      });

  }
}
