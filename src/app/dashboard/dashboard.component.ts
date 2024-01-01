// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/service/mock-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  activeSessions: any[] = [];
  archivedSessions: any[] = [];
  currentTab: number | string = 0;
  pageSize = 3;
  currentPage = 1;
  pagedSessions: any[] = [];
  newSessionTab: any = {
    label: 'Add New Session',
    icon: 'add',
  };

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.loadSessions();
  }

  onNewSessionTabClick() {
    console.log('Add New Session button clicked');
    // Implement logic to add a new session here
    // You might want to open a dialog or navigate to a different page for adding a new session
  }

  loadSessions() {
    this.mockDataService.getMockSessions().subscribe((data) => {
      console.log('All Sessions:', data);
      this.activeSessions = data.filter((session) => !session.isArchived);
      this.archivedSessions = data.filter((session) => session.isArchived);
      console.log('Active Sessions:', this.activeSessions);
      console.log('Archived Sessions:', this.archivedSessions);

      // Initial setup for pagination
      this.updatePagedSessions();
    });
  }

  onViewClick(sessionId: string) {
    console.log('View clicked for session ID:', sessionId);
    // Implement view logic if needed
  }

  onEditClick(sessionId: string) {
    console.log('Edit clicked for session ID:', sessionId);
    // Implement edit logic if needed
  }

  onDeleteClick(sessionId: string) {
    console.log('Delete clicked for session ID:', sessionId);
    // Implement delete logic if needed
  }

  onArchiveClick(sessionId: string) {
    console.log('Archive clicked for session ID:', sessionId);
    // Implement archive logic if needed
  }

  onRestoreClick(sessionId: string) {
    console.log('Restore clicked for session ID:', sessionId);
    // Implement restore logic if needed
  }

  changeTab(event: any) {
    this.currentTab = event.index;

    // Reset pagination when changing tabs
    this.currentPage = 1;
    this.updatePagedSessions();
  }

  updatePagedSessions() {
    const sessions = this.currentTab === 0 ? this.activeSessions : this.archivedSessions;
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedSessions = sessions.slice(startIndex, startIndex + this.pageSize);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedSessions();
    }
  }

  nextPage() {
    const sessions = this.currentTab === 0 ? this.activeSessions : this.archivedSessions;
    if (this.currentPage < Math.ceil(sessions.length / this.pageSize)) {
      this.currentPage++;
      this.updatePagedSessions();
    }
  }

  get totalPages(): number {
    const sessions = this.currentTab === 0 ? this.activeSessions : this.archivedSessions;
    return Math.ceil(sessions.length / this.pageSize);
  }
}
