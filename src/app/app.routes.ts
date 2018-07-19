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
import { NotAuthGuard } from './services/not-auth.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [NotAuthGuard] },
    { path: 'profile/:id', component: ProfileComponent, canActivate: [NotAuthGuard] },
    { path: 'admin', component: AdminComponent, canActivate: [NotAuthGuard] },
    { path: 'movements', component: MovementsComponent, canActivate: [NotAuthGuard] },
    { path: 'admin/panel', component: AdminComponent, canActivate: [NotAuthGuard] },
    { path: 'admin/paymentverify', component: PaymentverifyComponent, canActivate: [NotAuthGuard] },
    { path: 'admin/transactions', component: TransactionsComponent, canActivate: [NotAuthGuard] },
    { path: 'admin/usersmanagement', component: UsersmanagementComponent, canActivate: [NotAuthGuard] },
    { path: 'feepayment', component: FeepaymentComponent, canActivate: [NotAuthGuard] },
    { path: 'fee/:id', component: ViewfeeComponent, canActivate: [NotAuthGuard] },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];


export const APP_ROUTING = RouterModule.forRoot(routes, { useHash: true });
