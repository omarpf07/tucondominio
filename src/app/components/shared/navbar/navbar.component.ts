import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }
  public isLoggedIn = false;
  public isAdmin = false;
  ngOnInit() {
    this.auth.isLoggedIn() ? this.isLoggedIn = true : this.isLoggedIn = false;
    this.auth.isAdmin() ? this.isAdmin = true : this.isAdmin = false;
  }

  logout() {
    this.isLoggedIn = false;
    this.auth.logout();
  }
}
