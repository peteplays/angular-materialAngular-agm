import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './features/map/map.component';
import { FabComponent } from './features/fab/fab.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FabComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: '<<GOOGLE_API_KEY>>',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
