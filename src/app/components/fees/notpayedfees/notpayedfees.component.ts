import { Component, OnInit } from '@angular/core';
import { IFee } from './../../../beans/interfaces/fee';
import { MainService } from '../../../services/main.service';
import { DialogsService } from '../../../services/dialogs.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-notpayedfees',
  templateUrl: './notpayedfees.component.html',
  styleUrls: ['./notpayedfees.component.css']
})

export class NotpayedfeesComponent implements OnInit {

  public userName: string;
  public cuotas: IFee[];

  constructor(private mainService: MainService, private dialogsService: DialogsService,
    private auth: AuthService) { }

  ngOnInit() {
    this.userName = this.auth.getUserDisplayName();
    this.mainService.getcuotasSinPagar().subscribe(resp => {
      this.cuotas = resp;
      console.log(resp);
    }, err => console.log(err));
  }

  print() {
    window.print();
  }

}
