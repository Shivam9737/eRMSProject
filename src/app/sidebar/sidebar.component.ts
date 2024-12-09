import { Component,EventEmitter, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [MatSidenavModule,MatToolbarModule,
    MatIconModule,MatListModule,MatButtonModule,RouterOutlet,
    MatFormFieldModule,MatInputModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isExpanded = true; // for expanding it by default
  @Output() toggleSidebar = new EventEmitter<boolean>();


  toggle() {
    this.isExpanded = !this.isExpanded; // Toggle between expanded and collapsed
    this.toggleSidebar.emit(this.isExpanded);
  }


}
