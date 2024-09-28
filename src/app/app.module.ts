import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientListComponent } from './dashboard/navbar/patient-list/patient-list.component';
import { DoctorListComponent } from './dashboard/navbar/doctor-list/doctor-list.component';
import { AppointmentsComponent } from './dashboard/navbar/appointments/appointments.component';
import { BillingComponent } from './dashboard/navbar/billing/billing.component';
import { ReportsComponent } from './dashboard/navbar/reports/reports.component';
import { SettingsComponent } from './dashboard/navbar/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PatientListComponent,
    DoctorListComponent,
    AppointmentsComponent,
    BillingComponent,
    ReportsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
