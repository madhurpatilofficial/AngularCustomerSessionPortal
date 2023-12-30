// mock-data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  getMockSessions(): Observable<any[]> {
    return of([
      {
        SessionID: '1',
        SessionName: 'Angular Workshop',
        CustomerName: 'ABC Corp',
        CreatedBy: 'John Doe',
        CreatedOn: '2023-01-01',
        UpdatedOn: '2023-01-05',
        PotentialLead: 'High',
        Priority: 'High',
        FollowUpOn: '2023-01-10',
      },
      {
        SessionID: '2',
        SessionName: 'React Training',
        CustomerName: 'XYZ Ltd',
        CreatedBy: 'Jane Smith',
        CreatedOn: '2023-02-01',
        UpdatedOn: '2023-02-10',
        PotentialLead: 'Medium',
        Priority: 'Medium',
        FollowUpOn: '2023-02-20',
      },
      {
        SessionID: '3',
        SessionName: 'React Training',
        CustomerName: 'XYZ Ltd',
        CreatedBy: 'Jane Smith',
        CreatedOn: '2023-02-01',
        UpdatedOn: '2023-02-10',
        PotentialLead: 'Medium',
        Priority: 'Medium',
        FollowUpOn: '2023-02-20',
      },
      {
        SessionID: '4',
        SessionName: 'React Training',
        CustomerName: 'XYZ Ltd',
        CreatedBy: 'Jane Smith',
        CreatedOn: '2023-02-01',
        UpdatedOn: '2023-02-10',
        PotentialLead: 'Medium',
        Priority: 'Medium',
        FollowUpOn: '2023-02-20',
      },
      {
        SessionID: '5',
        SessionName: 'React Training',
        CustomerName: 'XYZ Ltd',
        CreatedBy: 'Jane Smith',
        CreatedOn: '2023-02-01',
        UpdatedOn: '2023-02-10',
        PotentialLead: 'Medium',
        Priority: 'Medium',
        FollowUpOn: '2023-02-20',
      }
      // Add more mock sessions as needed
    ]);
  }
}
