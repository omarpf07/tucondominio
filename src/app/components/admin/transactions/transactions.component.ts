import { AuthService } from './../../../services/auth.service';
import { DialogsService } from './../../../services/dialogs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../../services/main.service';
import { IMovements } from '../../../beans/interfaces/movements';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Movements } from '../../../beans/classes/movements';
import { User } from '../../../beans/classes/user';
import { Condominium } from '../../../beans/classes/condominium';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  public addTransaction = false;
  public gastos: IMovements[];
  public gastoCreationForm: FormGroup;

  constructor(private router: Router, private mainService: MainService, private dialogsService: DialogsService,
    private fb: FormBuilder, private auth: AuthService) {
    this.gastoCreationForm = this.fb.group({
      amount: ['', [Validators.required, Validators.minLength(1)]],
      date: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(1)]]
    });
  }
  ngOnInit() {
    this.mainService.getGastos().subscribe(resp => {
      this.gastos = resp;
      console.log(this.gastos);
    }, error => this.dialogsService.alert(error, 'Error!', true));
  }

  onSubmit() {
    const usuario = new User(this.auth.getUserId(), null, null, null, null, null, null, null, null);
    const gasto = new Movements(null, this.gastoCreationForm.controls['amount'].value,
      this.gastoCreationForm.controls['date'].value, true, this.gastoCreationForm.controls['description'].value, usuario);
    this.mainService.createGasto(gasto).subscribe(resp => {
      console.log(resp);
    }, err => console.log(err));
  }

  getBack() {
    this.router.navigate(['admin/panel']);
  }

  getBack2() {
    this.addTransaction = false;
  }
}
