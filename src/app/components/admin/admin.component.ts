import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  redirect(n: number) {
    switch (n) {
      case 0: this.router.navigateByUrl('/admin/paymentverify'); break;             // Paymentverify
      case 1: this.router.navigateByUrl('/admin/transactions'); break;              // Transactions
      case 2: this.router.navigateByUrl('/admin/usersmanagement'); break;           // Usersmanagement
    }
  }

}
