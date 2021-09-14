import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import { CardListComponent } from './card-list/card-list.component';
import { NewCardComponent } from './new-card/new-card.component';
import {AppRoutingModule} from "./app-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { CardDetailComponent } from './card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InscriptionComponent,
    ConnectionComponent,
    CardListComponent,
    NewCardComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
