import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {
  appointmentTimes = ['10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'];
selectedTime: string = '';

}
