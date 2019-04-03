import {RouterModule, Routes} from "@angular/router";
import {CustomerContainerComponent} from "./component/customer-container.component";
import {CustomerDetailComponent} from "./component/customer-detail.component";
import {NgModule} from "@angular/core";

const customerRoutes: Routes = [
  { path: 'customers', component: CustomerContainerComponent },
  { path: 'customer/:id', component: CustomerDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerRoutingModule {}
