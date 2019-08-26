import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {map, switchMap} from "rxjs/operators";
import {Observable} from "rxjs";
import * as _ from 'lodash';

import {Customer} from "../models/customer.model";
import {AppState} from "../../app.state";

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
          map((customers) => _.find(customers, {id: params.get('id')}))
        )
      })
    );
  }

  goToCustomers() {
    this.router.navigate(['/customers']);
  }
}
