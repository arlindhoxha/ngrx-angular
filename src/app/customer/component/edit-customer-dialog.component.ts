import {Component, Inject, OnInit} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {createCustomer, Customer} from "../models/customer.model";

@Component({
  selector: 'edit-customer-dialog',
  templateUrl: '../template/customer-dialog.component.html',
  styleUrls: ['../style/customer-dialog.component.scss']
})
export class EditCustomerDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditCustomerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Customer) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [this.data.firstName, [Validators.required]],
      lastName: [this.data.lastName, [Validators.required]],
      phone: [this.data.telephone, [Validators.required]]
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
      id: this.data.id,
      firstName: form.firstName,
      lastName: form.lastName,
      telephone: form.phone
    });
  }
}
