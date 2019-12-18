import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Customer} from "../models/customer.model";
import { MatDialog } from "@angular/material/dialog";
import {AddCustomerDialogComponent} from "./add-customer-dialog.component";
import {EditCustomerDialogComponent} from "./edit-customer-dialog.component";

@Component({
  selector: 'customers',
  templateUrl: '../template/customer.component.html',
  styleUrls: ['../style/customer.component.scss']
})
export class CustomerComponent {
  @Input()
  customers: Customer[];
  @Output()
  addCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();
  @Output()
  editCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();
  @Output()
  removeCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();

  columnsToDisplay: string[] = [
    'firstName',
    'lastName',
    'phone',
    'actions'
  ];

  constructor(private dialog: MatDialog) {}

  dispatchRemoveCustomer(customer: Customer) {
    this.removeCustomer.emit(customer);
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddCustomerDialogComponent, {
      width: '500px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.dispatchAddCustomer(result);
      } else {
        console.log("Customer was null");
      }
    });
  }

  openEditDialog(customer: Customer): void {
    const dialogRef = this.dialog.open(EditCustomerDialogComponent, {
      width: '500px',
      height: '400px',
      data: customer
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.dispatchEditCustomer(result);
      } else {
        console.log("Customer was null");
      }
    });
  }

  private dispatchAddCustomer(customer: Customer) {
    this.addCustomer.emit(customer);
  }

  private dispatchEditCustomer(customer: Customer) {
    this.editCustomer.emit(customer);
  }

}
