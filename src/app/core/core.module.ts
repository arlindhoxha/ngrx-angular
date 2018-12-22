import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [CommonModule]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
