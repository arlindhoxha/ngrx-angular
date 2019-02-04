import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from "@angular/core";
import {AppState} from "../../app.state";
import {select, Store} from "@ngrx/store";
import {Observable, Subject} from "rxjs";
import {Customer} from "../models/customer.model";
import {AddCustomerAction, EditCustomerAction, RemoveCustomerAction} from "../reducers/customer.reducer";

@Component({
  selector: 'customer-container',
  templateUrl: '../template/customer-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerContainerComponent implements OnDestroy, OnInit {
  private destroy$ = new Subject<void>()

  customers$: Observable<Customer[]>;

  constructor(private store: Store<AppState>) {
    this.customers$ = this.store.pipe(select('customers', 'customers'));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
    this.store.dispatch({type: 'APP_INIT'});
  }

  dispatchAddCustomer(customer: Customer) {
    this.store.dispatch(new AddCustomerAction(customer));
  }

  dispatchEditCustomer(customer: Customer) {
    this.store.dispatch(new EditCustomerAction(customer));
  }

  dispatchRemoveCustomer(customer: Customer) {
    this.store.dispatch(new RemoveCustomerAction(customer));
  }
}
