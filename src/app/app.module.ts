import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CustomerModule} from "./customer/customer.module";
import {CoreModule} from "./core/core.module";
import {AppStateModule} from "./app.state";
import {CustomerComponent} from "./customer/component/customer.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppStateModule,
    CoreModule.forRoot(),
    CustomerModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
