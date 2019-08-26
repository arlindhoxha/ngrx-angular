import {NgModule} from "@angular/core";
import {HomeComponent} from "./component/home.component";
import {CommonModule} from "@angular/common";
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
