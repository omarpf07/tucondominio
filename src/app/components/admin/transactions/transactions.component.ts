import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  public addTransaction = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  getBack() {
    this.router.navigate(['admin/panel']);
  }
}
