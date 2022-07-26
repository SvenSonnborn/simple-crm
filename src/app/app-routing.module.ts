import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BrokerComponent } from './broker/broker.component';
import { DepoComponent } from './depo/depo.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'broker', component: BrokerComponent},
  { path: 'broker/:id', component: UserDetailComponent},
  { path: 'depo', component: DepoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
