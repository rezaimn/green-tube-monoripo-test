import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    BaseLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[BaseLayoutComponent]
})
export class BaseLayoutModule { }
