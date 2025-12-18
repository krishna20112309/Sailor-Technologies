import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
showServices = false;
  mobileMenu = false;

  toggleServices() {
    this.showServices = !this.showServices;
  }

  closeServices() {
    this.showServices = false;
  }

  toggleMobile() {
    this.mobileMenu = !this.mobileMenu;
  }

  closeAll() {
    this.mobileMenu = false;
    this.showServices = false;
  }
  
}
