import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";

import * as customers from './customer/reducers/customer.reducer';
import {ActionReducerMap, StoreModule} from "@ngrx/store";
import {CustomerEffects} from "./customer/effects/customer.effects";

export interface AppState {
  readonly customers: customers.State;
}

export const reducers: ActionReducerMap<AppState> = {
  customers: customers.reducer
}

export const effects: any[] = [CustomerEffects];

export type AppAction = customers.Actions;

@NgModule({
  imports: [StoreModule.forRoot<AppState, AppAction>(reducers), EffectsModule.forRoot(effects)],
  exports: [StoreModule]
})
export class AppStateModule {}
