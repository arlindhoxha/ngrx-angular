import * as _ from 'lodash';

export interface Customer {
  id?: string,
  firstName: string,
  lastName: string,
  telephone: string
}

export function createCustomer(...data: Partial<Customer>[]): Customer {
  const customer: Customer = _.assign({}, ...data);
  return customer;
}
