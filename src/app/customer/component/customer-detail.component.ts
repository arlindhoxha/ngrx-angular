import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Customer} from "../models/customer.model";
import {AppState} from "../../app.state";
import {select, Store} from "@ngrx/store";
import {filter, map, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'customer-detail',
  templateUrl: '../template/customer-detail.component.html',
  styleUrls: []
})
export class CustomerDetailComponent implements OnInit {

  customer$: Observable<Customer>;

  public constructor(private route: ActivatedRoute, private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.customer$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.store.pipe(
          select('customers', 'customers'),
          map((customer, index) => {
            if (customer[index].id === params.get("id")) {
              return customer[index];
            }
          })
        )
      })
    );
  }

  goToCustomers() {
    this.router.navigate(['/customers']);
  }
}
