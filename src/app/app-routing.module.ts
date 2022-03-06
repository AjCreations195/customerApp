import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then((x) => x.CustomerModule),
  },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
