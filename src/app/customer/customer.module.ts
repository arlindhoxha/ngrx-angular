import {ModuleWithProviders, NgModule} from "@angular/core";
import {CustomerComponent} from "./component/customer.component";
import {CustomerService} from "./services/customer.service";
import {CommonModule} from "@angular/common";
import {CoreModule} from "../core/core.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CustomerContainerComponent} from "./component/customer-container.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTableModule
} from "@angular/material";
import {AddCustomerDialogComponent} from "./component/add-customer-dialog.component";
import {EditCustomerDialogComponent} from "./component/edit-customer-dialog.component";

@NgModule({
  declarations: [
    CustomerContainerComponent,
    CustomerComponent,
    AddCustomerDialogComponent,
    EditCustomerDialogComponent
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
    MatDialogModule
  ],
  exports: [
    CustomerContainerComponent,
    CustomerComponent,
    AddCustomerDialogComponent,
    EditCustomerDialogComponent
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
