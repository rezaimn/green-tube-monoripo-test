import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedUiLibModule} from "../../../shared-ui-lib/src/lib/shared-ui-lib.module";
import { SharedUiTranslatorService } from 'projects/shared-ui-lib/src/public-api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedUiLibModule.forRoot(
      {
        translator:{
          provide: SharedUiTranslatorService,
          useExisting:SharedUiTranslatorService
        }
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class BaseCodeModule {
  static forRoot(providers:IBaseCodeProviders):ModuleWithProviders<BaseCodeModule>{
    return {
      ngModule: BaseCodeModule,
      providers:[providers.translator]
    }
  }
}


export interface IBaseCodeProviders {
  translator: Provider
}
