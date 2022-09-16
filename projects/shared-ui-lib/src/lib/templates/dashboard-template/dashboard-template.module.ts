import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTemplateComponent } from './dashboard-template.component';
import {AvatarModule} from "../../atoms/avatar";
import {DashboardCardsModule} from "../../organisms/dashboard-cards";
import {ButtonModule} from "../../atoms/button";



@NgModule({
  declarations: [
    DashboardTemplateComponent
  ],
  imports: [
    CommonModule,
    AvatarModule,
    DashboardCardsModule,
    ButtonModule
  ],
  exports:[DashboardTemplateComponent]
})
export class DashboardTemplateModule { }
