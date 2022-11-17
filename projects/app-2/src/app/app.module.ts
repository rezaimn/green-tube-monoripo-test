import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslocoModule, TranslocoService} from "@ngneat/transloco";
import {HttpClientModule} from "@angular/common/http";
import {BaseCodeModule} from "../../../base-code/src/app/app.module";
import {SharedUiTranslatorService} from "../../../shared-ui-lib/src/lib/utils/shared-ui-translator.service";
import {AppTwoTranslatorClass} from "./utils/app-two-translator/app-two-translator-class";
import {TranslocoApp2RootModule} from "./utils/transloco-root.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslocoApp2RootModule,
    HttpClientModule,
    BaseCodeModule.forRoot({
      translator:{
        provide:SharedUiTranslatorService,
        useClass:AppTwoTranslatorClass,
        deps:[TranslocoService]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
