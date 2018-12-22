import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {createCustomer, Customer} from "../models/customer.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'customers',
  templateUrl: '../template/customer.component.html',
  styleUrls: ['../style/customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input()
  customers: Customer[];
  @Output()
  addCustomer: EventEmitter<Customer> = new EventEmitter<Customer>()
  @Output()
  removeCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();

  columnsToDisplay: string[] = [
    'firstName',
    'lastName',
    'phone',
    'actions'
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  dispatchAddCustomer(customer: Customer) {
    this.addCustomer.emit(customer);
  }

  dispatchRemoveCustomer(customer: Customer) {
    this.removeCustomer.emit(customer);
  }

  submit(): void {
    if (!this.form.valid) {
      return;
    }
    const customer = this.getCustomerFromForm(this.form.value);
    this.dispatchAddCustomer(customer);
    this.form.reset();
  }

  private getCustomerFromForm(form: any): Customer {
    return createCustomer({
      firstName: form.firstName,
      lastName: form.lastName,
      telephone: form.phone
    });
  }


}
