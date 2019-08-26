import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CustomerModule} from "./customer/customer.module";
import {CoreModule} from "./core/core.module";
import {AppStateModule} from "./app.state";
import {HomeModule} from "./home/home.module";
import {AppRoutingModule} from "./app-routing.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppStateModule,
    CoreModule.forRoot(),
    CustomerModule.forRoot(),
    HomeModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
