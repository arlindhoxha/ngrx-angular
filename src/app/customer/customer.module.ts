import {ModuleWithProviders, NgModule} from "@angular/core";
import {CustomerComponent} from "./component/customer.component";
import {CustomerService} from "./services/customer.service";
import {CommonModule} from "@angular/common";
import {CoreModule} from "../core/core.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CustomerContainerComponent} from "./component/customer-container.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule} from "@angular/material";

@NgModule({
  declarations: [
    CustomerContainerComponent,
    CustomerComponent
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
    MatButtonModule
  ],
  exports: [
    CustomerContainerComponent,
    CustomerComponent
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
