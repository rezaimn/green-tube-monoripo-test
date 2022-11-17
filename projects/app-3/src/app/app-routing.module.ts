import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "pages/dashboard",
    loadChildren: () => import('../../../base-code/src/app/pages/dashboard/dashboard.module').then(b => b.DashboardModule)
  },
  {"path": "", redirectTo: "pages/dashboard", pathMatch: 'full'},
  {"path": "**", redirectTo: "pages/dashboard", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
