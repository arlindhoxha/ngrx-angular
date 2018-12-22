import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {CustomerService} from "../services/customer.service";
import {APP_INIT} from "../../core/redux";
import {catchError, map, switchMap} from "rxjs/operators";
import {
  ADD_CUSTOMER,
  AddCustomerAction, AddCustomerFailureAction,
  AddCustomerSuccessAction,
  LoadCustomersAction, REMOVE_CUSTOMER, RemoveCustomerAction, RemoveCustomerFailureAction, RemoveCustomerSuccessAction
} from "../reducers/customer.reducer";
import {of} from "rxjs";

@Injectable()
export class CustomerEffects {

  constructor(private actions$: Actions, private store: Store<any>, private customerService: CustomerService) {}

  @Effect()
  initCustomers$ = this.actions$.pipe(
    ofType(APP_INIT),
    switchMap(() => this.customerService.customers$),
    map((customers) => new LoadCustomersAction(customers))
  );

  @Effect()
  addCustomer$ = this.actions$.pipe(
    ofType(ADD_CUSTOMER),
    switchMap(({ payload }: AddCustomerAction) => {
      return this.customerService.addCustomer(payload).pipe(
        map(() => {
          return new AddCustomerSuccessAction(payload);
        }),
        catchError((error) => {
          return of(new AddCustomerFailureAction(error));
        })
      );
    })
  );

  @Effect()
  removeCustomer$ = this.actions$.pipe(
    ofType(REMOVE_CUSTOMER),
    switchMap(({ payload }: RemoveCustomerAction) => {
      return this.customerService.removeCustomer(payload.id).pipe(
        map(() => {
          return new RemoveCustomerSuccessAction(payload);
        }),
        catchError((error) => {
          return of(new RemoveCustomerFailureAction(error));
        })
      );
    })
  );
}
