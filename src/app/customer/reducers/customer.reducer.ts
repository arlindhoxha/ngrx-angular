import {Action} from "@ngrx/store";
import {createCustomer, Customer} from "../models/customer.model";
import * as _ from 'lodash';

export const LOAD_CUSTOMERS = "LOAD_CUSTOMERS";
export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const ADD_CUSTOMER_FAILURE = "ADD_CUSTOMER_FAILURE";
export const ADD_CUSTOMER_SUCCESS = "ADD_CUSTOMER_SUCCESS";
export const EDIT_CUSTOMER = "EDIT_CUSTOMER";
export const EDIT_CUSTOMER_FAILURE = "EDIT_CUSTOMER_FAILURE";
export const EDIT_CUSTOMER_SUCCESS = "EDIT_CUSTOMER_SUCCESS";
export const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
export const REMOVE_CUSTOMER_FAILURE = "REMOVE_CUSTOMER_FAILURE";
export const REMOVE_CUSTOMER_SUCCESS = "REMOVE_CUSTOMER_SUCCESS";

export class LoadCustomersAction implements Action {
  readonly type = LOAD_CUSTOMERS;

  public constructor(public payload: Customer[]) {}
}

export class AddCustomerAction implements Action {
  readonly type = ADD_CUSTOMER;

  public constructor(public payload: Customer) {}
}

export class AddCustomerFailureAction implements Action {
  readonly type = ADD_CUSTOMER_FAILURE;

  public constructor(public payload: any) {}
}

export class AddCustomerSuccessAction implements Action {
  readonly type = ADD_CUSTOMER_SUCCESS;

  public constructor(public payload: Customer) {}
}

export class EditCustomerAction implements Action {
  readonly type = EDIT_CUSTOMER;

  public constructor(public payload: Customer) {}
}

export class EditCustomerFailureAction implements Action {
  readonly type = EDIT_CUSTOMER_FAILURE;

  public constructor(public payload: any) {}
}

export class EditCustomerSuccessAction implements Action {
  readonly type = EDIT_CUSTOMER_SUCCESS;

  public constructor(public payload: Customer) {}
}

export class RemoveCustomerAction implements Action {
  readonly type = REMOVE_CUSTOMER;

  public constructor(public payload: Customer) {}
}

export class RemoveCustomerFailureAction implements Action {
  readonly type = REMOVE_CUSTOMER_FAILURE;

  public constructor(public payload: any) {}
}

export class RemoveCustomerSuccessAction implements Action {
  readonly type = REMOVE_CUSTOMER_SUCCESS;

  public constructor(public payload: Customer) {}
}

export type Actions =
  | LoadCustomersAction
  | AddCustomerAction
  | AddCustomerFailureAction
  | AddCustomerSuccessAction
  | EditCustomerAction
  | EditCustomerFailureAction
  | EditCustomerSuccessAction
  | RemoveCustomerAction
  | RemoveCustomerFailureAction
  | RemoveCustomerSuccessAction;

export interface State {
  customers: Customer[];
  isSaving: boolean;
}
export const initialState: State = {
  customers: [],
  isSaving: false
}

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case LOAD_CUSTOMERS:
      const customersArray = Array.isArray(action.payload) ? action.payload : [];
      return {
        ...state,
        customers: customersArray
      };
    case ADD_CUSTOMER:
      return {...state, isSaving: true};
    case ADD_CUSTOMER_FAILURE:
      return {...state, isSaving: false};
    case ADD_CUSTOMER_SUCCESS:
      const customerToAdd = [action.payload];
      return {
        ...state,
        customers: [...state.customers, ...customerToAdd],
        isSaving: false
      };
    case EDIT_CUSTOMER:
      return {...state, isSaving: true};
    case EDIT_CUSTOMER_FAILURE:
      return {...state, isSaving: false};
    case EDIT_CUSTOMER_SUCCESS:
      const updatedCustomer = createCustomer(action.payload);
      return {
        ...state,
        customers: [...state.customers.map(customer => customer.id === updatedCustomer.id ? updatedCustomer : customer)],
        isSaving: false
      };
    case REMOVE_CUSTOMER:
      return {...state, isSaving: true};
    case REMOVE_CUSTOMER_FAILURE:
      return {...state, isSaving: false};
    case REMOVE_CUSTOMER_SUCCESS:
      const customerToRemove = action.payload;
      return {
        ...state,
        customers: state.customers.filter(({ id }) => id !== customerToRemove.id)
      };
    default:
      return state;
  }  
}
