import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  closeMenu() {
    const navCollapse = document.getElementById('navbarNav');
    const menuButton = document.querySelector('.custom-toggler') as HTMLElement;

    if (navCollapse && navCollapse.classList.contains('show') && menuButton) {
      menuButton.click();
    }
  }
}
