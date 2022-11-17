import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslocoModule, TranslocoService} from "@ngneat/transloco";
import {BaseCodeModule} from "../../../base-code/src/app/app.module";
import {SharedUiTranslatorService} from "../../../shared-ui-lib/src/lib/utils/shared-ui-translator.service";
import {AppThreeTranslatorClass} from "./utils/app-three-translator/app-three-translator-class";
import {TranslocoApp3RootModule} from "./utils/transloco-root.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslocoApp3RootModule,
    HttpClientModule,
    BaseCodeModule.forRoot({
      translator:{
        provide:SharedUiTranslatorService,
        useClass:AppThreeTranslatorClass,
        deps:[TranslocoService]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
