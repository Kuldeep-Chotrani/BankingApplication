import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { TransactionComponent } from './transaction/transaction.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent,canActivate:[AuthGaurdService] },
  { path: 'addaccount', component: AddEmployeeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'transaction', component: TransactionComponent,canActivate:[AuthGaurdService] },
  { path: 'viewDetails', component: ViewDetailsComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
