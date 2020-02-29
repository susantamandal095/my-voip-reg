import { OrdersComponent } from './orders/orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { SiteComponent } from './site/site.component';
import { ThemeeditorComponent } from './themeeditor/themeeditor.component';


const routes: Routes = [
  {path: 'page',component: PageComponent},
  {path: 'site', component: SiteComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'themeeditor', component: ThemeeditorComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
