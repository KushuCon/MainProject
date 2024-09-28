import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent {
  patients = [
    { id: 1, name: 'John Doe', age: 30, condition: 'Flu', visitDate: '2023-10-01' },
    { id: 2, name: 'Jane Smith', age: 25, condition: 'Cold', visitDate: '2023-10-02' },
    // Add more sample data...
  ];
  
}
