import { Component, OnInit } from '@angular/core';

import { ControlPosition, ZoomControlStyle } from '@agm/core/services/google-maps-types';
import { IMapData, IMapCoords, IMarker, IGeolocationCurrent } from '../../modals';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})

export class MapComponent implements OnInit {
  currentListings: IMapData[] = [];

  lat = 32.8070014;
  lng = -79.9731229;
  zoom = 9;
  scrollwheel = true;
  streetViewControl = false;

  streetViewControlOptions = {
    position: ControlPosition.RIGHT_CENTER,
  };
  zoomControlOptions = {
    position: ControlPosition.RIGHT_CENTER,
    style: ZoomControlStyle.SMALL,
  };
  icon = {
    url: '../../../assets/images/guitar.png',
    scaledSize: {
      width: 40,
      height: 60,
    },
  };
  customStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          hue: '#006699',
        },
        {
          saturation: -100,
        },
      ],
    },
    {
      featureType: 'water',
      stylers: [
        {
          color: '#98e4d1',
        },
      ],
    },
  ];

  ngOnInit() {
    this.getListings();
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(p => this.setCurrentLocation(p));
    }
  }

  setCurrentLocation(position: IGeolocationCurrent) {
    if (position.coords.latitude && position.coords.longitude) {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 12;

      this.addToListings({
        lat: this.lat,
        lng: this.lng,
      });
    }
  }

  mapMove(coordinates: IMapCoords) {
    console.log('Map Move', coordinates);
  }

  mapClick(data: IMapCoords) {
    this.addToListings(data.coords);
    console.log('Map Click', data.coords);
  }

  markerMove(marker: IMarker, $event: IMapCoords) {
    console.log('Marker Move', marker, $event.coords);
  }

  addToListings(data: IMapData) {
    const newListing = {
      title: data.title || null,
      lat: data.lat,
      lng: data.lng,
    };

    this.currentListings.push(newListing);
  }

  getListings() {
    this.currentListings = [
      {
        title: 'Title 1',
        lat: 32.8070014,
        lng: -79.9731229,
      },
      {
        title: 'Title 2',
        lat: 32.864702834969556,
        lng: -81.05802890234372,
      },
      {
        title: 'Title 3',
        lat: 32.93618350655543,
        lng: -80.08847934531252,
      },
    ];
  }
}
