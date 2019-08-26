import {Component, OnInit} from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {createCustomer, Customer} from "../models/customer.model";

@Component({
  selector: 'add-customer-dialog',
  templateUrl: '../template/customer-dialog.component.html',
  styleUrls: []
})
export class AddCustomerDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddCustomerDialogComponent>) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (!this.form.valid) {
      return;
    }
    const customer = this.getCustomerFromForm(this.form.value);
    this.form.reset();
    this.dialogRef.close(customer);
  }

  private getCustomerFromForm(form: any): Customer {
    return createCustomer({
      firstName: form.firstName,
      lastName: form.lastName,
      telephone: form.phone
    });
  }
}
