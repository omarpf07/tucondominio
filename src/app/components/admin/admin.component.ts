import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Condominium } from '../../beans/classes/condominium';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public condominio: Condominium;
  constructor(
    private router: Router, private mainService: MainService
  ) { }

  ngOnInit() {
    this.mainService.getCondo().subscribe(resp => {
      this.condominio = resp;
      console.log(this.condominio);
    }, err => console.log(err));
  }

  submit() {
    this.mainService.updateCondo(this.condominio).subscribe(() => {
      console.log('Actualizado');
    }, err => console.log(err));
  }

  redirect(n: number) {
    switch (n) {
      case 0: this.router.navigateByUrl('/admin/paymentverify'); break;             // Paymentverify
      case 1: this.router.navigateByUrl('/admin/transactions'); break;              // Transactions
      case 2: this.router.navigateByUrl('/admin/usersmanagement'); break;           // Usersmanagement
    }
  }

}
