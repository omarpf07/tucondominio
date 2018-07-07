import { ViewfeeComponent } from './components/fees/viewfee/viewfee.component';
import { TransactionsComponent } from './components/admin/transactions/transactions.component';
import { AdminComponent } from './components/admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentverifyComponent } from './components/admin/paymentverify/paymentverify.component';
import { UsersmanagementComponent } from './components/admin/usersmanagement/usersmanagement.component';
import { FeepaymentComponent } from './components/fees/feepayment/feepayment.component';
import { MovementsComponent } from './components/movements/movements.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'profile/:id', component: ProfileComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'movements', component: MovementsComponent },
    { path: 'admin/paymentverify', component: PaymentverifyComponent },
    { path: 'admin/transactions', component: TransactionsComponent },
    { path: 'admin/usersmanagement', component: UsersmanagementComponent },
    { path: 'feepayment', component: FeepaymentComponent },
    { path: 'fee/:id', component: ViewfeeComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];


export const APP_ROUTING = RouterModule.forRoot(routes, { useHash: true });
