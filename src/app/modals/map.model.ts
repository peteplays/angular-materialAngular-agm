import { LatLngLiteral } from '@agm/core/services/google-maps-types';

export interface IMapData extends LatLngLiteral {
  title?: string;
}

export interface IMapCoords {
  coords: LatLngLiteral;
}

export interface IMarker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
