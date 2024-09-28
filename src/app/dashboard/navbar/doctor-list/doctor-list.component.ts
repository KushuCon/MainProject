import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent {
  doctors = [
    { id: 1, name: 'Dr. Smith', specialization: 'Cardiology', contact: '123-456-7890', availability: '9 AM - 5 PM' },
    { id: 2, name: 'Dr. Jones', specialization: 'Pediatrics', contact: '987-654-3210', availability: '10 AM - 4 PM' },
    // Add more sample data...
  ];
  
}
