import { NgModule } from '@angular/core';
import { SharedUiLibComponent } from './shared-ui-lib.component';
import {AvatarModule} from "./atoms/avatar";
import {ButtonModule} from "./atoms/button";
import {CardModule} from "./molecules/card";
import {DashboardCardsModule} from "./organisms/dashboard-cards";
import {FooterModule} from "./organisms/footer";
import {HeaderModule} from "./organisms/header";
import {SidebarModule} from "./organisms/sidebar";
import {BaseLayoutModule} from "./templates/base-layout";
import {DashboardTemplateModule} from "./templates/dashboard-template";


@NgModule({
  declarations: [
    SharedUiLibComponent,

  ],
  imports: [
    AvatarModule,
    ButtonModule,
    CardModule,
    DashboardCardsModule,
    FooterModule,
    HeaderModule,
    SidebarModule,
    BaseLayoutModule,
    DashboardTemplateModule
  ],
  exports: [
    SharedUiLibComponent,
    AvatarModule,
    ButtonModule,
    CardModule,
    DashboardCardsModule,
    FooterModule,
    HeaderModule,
    SidebarModule,
    BaseLayoutModule,
    DashboardTemplateModule
  ]
})
export class SharedUiLibModule { }
