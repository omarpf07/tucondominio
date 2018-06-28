import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { TransactionsComponent } from './components/admin/transactions/transactions.component';
import { FeepaymentComponent } from './components/fees/feepayment/feepayment.component';

import { UsersmanagementComponent } from './components/admin/usersmanagement/usersmanagement.component';
import { PaymentverifyComponent } from './components/admin/paymentverify/paymentverify.component';
import { ViewfeeComponent } from './components/fees/viewfee/viewfee.component';


import { APP_ROUTING } from './app.routes';
import { MovementsComponent } from './components/movements/movements.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    ProfileComponent,
    LoginComponent,
    NotificationsComponent,
    PaymentverifyComponent,
    TransactionsComponent,
    UsersmanagementComponent,
    FeepaymentComponent,
    ViewfeeComponent,
    MovementsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
