import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './dashboard/navbar/patient-list/patient-list.component';
import { DoctorListComponent } from './dashboard/navbar/doctor-list/doctor-list.component';
import { AppointmentsComponent } from './dashboard/navbar/appointments/appointments.component'
import { BillingComponent } from './dashboard/navbar/billing/billing.component';
import { ReportsComponent } from './dashboard/navbar/reports/reports.component';
import { AuthGuard } from './auth.guard'; // Import your AuthGuard here
import { DashboardComponent } from './dashboard/dashboard.component'; // Import DashboardComponent
import { SettingsComponent } from './dashboard/navbar/settings/settings.component'; // Import SettingsComponent

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Protected dashboard route
  { path: 'dashboard/patient-list', component: PatientListComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/doctor-list', component: DoctorListComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/appointments', component: AppointmentsComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/billing', component: BillingComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login as default route
  { path: '**', redirectTo: '/login' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
