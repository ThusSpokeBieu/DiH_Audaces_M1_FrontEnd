import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamiComponent } from 'src/components/nami/nami.component';
import { GaleryComponent } from 'src/components/galery/galery.component';

@NgModule({
  declarations: [
    AppComponent,
    NamiComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
