import { IFee } from './../../../beans/interfaces/fee';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { DialogsService } from '../../../services/dialogs.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-allfees',
  templateUrl: './allfees.component.html',
  styleUrls: ['./allfees.component.css']
})
export class AllfeesComponent implements OnInit {

  public userName: string;
  public cuotas: IFee[];

  constructor(private mainService: MainService, private dialogsService: DialogsService,
    private auth: AuthService) { }

  ngOnInit() {
    this.userName = this.auth.getUserDisplayName();
    this.mainService.getAllCuotasByUserId().subscribe(resp => {
      this.cuotas = resp;
      console.log(resp);
    }, error => this.dialogsService.alert(error, 'Error obteniendo la información de las cuotass', true));
  }

  print() {
    window.print();
  }
}
