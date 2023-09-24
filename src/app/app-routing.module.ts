import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardLayoutComponent,
  },
  {
    path:'billing/:table',
    component: BillingPageComponent,
  },
  {
    path:'invoice/:name/:phone/:address/:table',
    component: InvoiceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
