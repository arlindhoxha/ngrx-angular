import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {createCustomer, Customer} from "../models/customer.model";
import {catchError, map} from "rxjs/operators";

interface CustomerPayload {
  status: boolean,
  message: string,
  customers?: Customer[]
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class CustomerService {
  readonly customers$ = this.getCustomers();

  constructor(private http: HttpClient) {}

  private getCustomers(): Observable<Customer[]> {
    return this.http.get<CustomerPayload>('http://localhost:8082/api/customers').pipe(
      map(({ customers = [] }: CustomerPayload) => {
        return customers.map((customer) => createCustomer(customer));
      }),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post('http://localhost:8082/api/customer/add', customer);
  }

  removeCustomer(id: string): Observable<any> {
    return this.http.delete(`http://localhost:8082/api/customer/remove/${id}`, httpOptions);
  }
}
