import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatTabsModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  displayedColumns = ['formName', 'formType', 'createdBy', 'formDate', 'status', 'ca'];
  dataSource = [
    { formName: 'QF003', formType: 'CCP', createdBy: 'Leticia', formDate: '08/10/2024 13:05', status: 'Approved', ca: 'Yes' },
    { formName: 'QF015', formType: 'Pre Op', createdBy: 'Antonio', formDate: '08/09/2024 13:05', status: 'Submitted', ca: 'No' },
    { formName: 'QF011', formType: 'Production Changeover', createdBy: 'Gabriella', formDate: '08/09/2024 16:05', status: 'In Progress', ca: 'No' },
  ];
}
