import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedUiLibModule} from "../../../shared-ui-lib/src/lib/shared-ui-lib.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedUiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
