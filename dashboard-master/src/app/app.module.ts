import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageComponent } from './page/page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SiteComponent } from './site/site.component';
import { OrdersComponent } from './orders/orders.component';
import { ThemeeditorComponent } from './themeeditor/themeeditor.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PageComponent,
    NavbarComponent,
    SiteComponent,
    OrdersComponent,
    ThemeeditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
