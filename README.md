# Angular - Material Angular - AGM

# Description
This app uses [Angular](https://angular.io/), [Material Angular](https://material.angular.io), and [AGM (Angular Google Maps)](https://angular-maps.com). The app displays a full window google map with custom styled map and marker. The app detects when the map moves, and adds a marker when clicked.

If the user allows the browser location access the map will center at your current location and add a marker.

# Setup
- clone the repo
- navigate to repo
- `npm install`
- get a [Google Map API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)
- add Google API key to `app.module.ts`
```
AgmCoreModule.forRoot({
  apiKey: '<<GOOGLE_API_KEY>>',
}),
```


# Usage
- `npm start` - serves app at `http://localhost:4200/`

