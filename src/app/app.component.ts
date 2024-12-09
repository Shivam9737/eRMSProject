import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'gg
})
export class AppComponent {
  title = 'eRMSProject';
  isSidebarExpanded: boolean = false;
  onToggleSidebar(expanded: boolean) {
    this.isSidebarExpanded = expanded;
  }
}
