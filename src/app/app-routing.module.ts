import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/component/home.component";
import {NgModule} from "@angular/core";
import {CustomerContainerComponent} from "./customer/component/customer-container.component";

const routes: Routes = [
  { path: 'customers', component: CustomerContainerComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
