
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { TransactionsComponent } from './components/admin/transactions/transactions.component';
import { FeepaymentComponent } from './components/fees/feepayment/feepayment.component';
import { MovementsComponent } from './components/movements/movements.component';
import { UsersmanagementComponent } from './components/admin/usersmanagement/usersmanagement.component';
import { PaymentverifyComponent } from './components/admin/paymentverify/paymentverify.component';
import { ViewfeeComponent } from './components/fees/viewfee/viewfee.component';
import { APP_ROUTING } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainService } from './services/main.service';
import { AuthService } from './services/auth.service';
import { SharedService } from './services/shared.service';
import { NotAuthGuard } from './services/not-auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    ProfileComponent,
    LoginComponent,
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
    TableModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [AuthService, MainService, SharedService, NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
