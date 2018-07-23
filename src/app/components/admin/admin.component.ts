import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Condominium } from '../../beans/classes/condominium';
import { MainService } from '../../services/main.service';
import { DialogsService } from '../../services/dialogs.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public condominio: Condominium;
  constructor(
    private router: Router, private mainService: MainService, private dialogsService: DialogsService
  ) { }

  ngOnInit() {
    this.mainService.getCondo().subscribe(resp => {
      this.condominio = resp;
      console.log(this.condominio);
    }, error => this.dialogsService.alert(error, 'Error obteniendo la información del condominio', true));
  }

  submit() {
    this.mainService.updateCondo(this.condominio).subscribe(() => {
      console.log('Actualizado');
    }, error => this.dialogsService.alert(error, 'La información del condominio no pudo ser actualizada', true));
  }

  redirect(n: number) {
    switch (n) {
      case 0: this.router.navigateByUrl('/admin/paymentverify'); break;             // Paymentverify
      case 1: this.router.navigateByUrl('/admin/transactions'); break;              // Transactions
      case 2: this.router.navigateByUrl('/admin/usersmanagement'); break;           // Usersmanagement
    }
  }

}
