import {ModuleWithProviders, NgModule} from "@angular/core";
import {CustomerComponent} from "./component/customer.component";
import {CustomerService} from "./services/customer.service";
import {CommonModule} from "@angular/common";
import {CoreModule} from "../core/core.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CustomerContainerComponent} from "./component/customer-container.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import {AddCustomerDialogComponent} from "./component/add-customer-dialog.component";
import {EditCustomerDialogComponent} from "./component/edit-customer-dialog.component";
import {CustomerDetailComponent} from "./component/customer-detail.component";
import {CustomerRoutingModule} from "./customer-routing.module";

@NgModule({
  declarations: [
    CustomerContainerComponent,
    CustomerComponent,
    AddCustomerDialogComponent,
    EditCustomerDialogComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    CustomerRoutingModule,
  ],
  exports: [
    CustomerContainerComponent,
    CustomerComponent,
    AddCustomerDialogComponent,
    EditCustomerDialogComponent,
    CustomerDetailComponent
  ],
  entryComponents: [
    AddCustomerDialogComponent,
    EditCustomerDialogComponent
  ]
})
export class CustomerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CustomerModule,
      providers: [CustomerService]
    };
  }
}
