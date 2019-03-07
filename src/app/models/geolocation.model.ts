export interface IGeolocationCurrentCoords {
  accuracy: number;
  altitude?: number;
  altitudeAccuracy?: number;
  heading?: number;
  latitude: number;
  longitude: number;
  speed?: number;
}

export interface IGeolocationCurrent {
  coords: IGeolocationCurrentCoords;
  timestamp: number;
}
