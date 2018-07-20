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
    console.log(this.isAdmin);
    this.auth.observableLogIn.subscribe(resp => {
      this.isLoggedIn = resp;
      this.isAdmin = this.auth.getAdmin();
    });
  }

  logout() {
    this.auth.logout();
    this.auth.isLoggedInBehavior.next(false);
  }
}
