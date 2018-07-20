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
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'movements', component: MovementsComponent, canActivate: [AuthGuard] },
    { path: 'admin/panel', component: AdminComponent, canActivate: [AuthGuard] },
    { path: 'admin/paymentverify', component: PaymentverifyComponent, canActivate: [AuthGuard] },
    { path: 'admin/transactions', component: TransactionsComponent, canActivate: [AuthGuard] },
    { path: 'admin/usersmanagement', component: UsersmanagementComponent, canActivate: [AuthGuard] },
    { path: 'feepayment', component: FeepaymentComponent, canActivate: [AuthGuard] },
    { path: 'fee/:id', component: ViewfeeComponent, canActivate: [AuthGuard] },
    { path: '', pathMatch: 'full', redirectTo: 'login' }
];


export const APP_ROUTING = RouterModule.forRoot(routes, { useHash: true });
