import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IUser, ICondominium, IFee } from '../../beans';
import { MainService } from '../../services/main.service';
import { DialogsService } from '../../services/dialogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: IUser;
  public users: IUser[];
  public condo: ICondominium;
  public cuotas: IFee[];
  constructor(private auth: AuthService, private mainService: MainService,
    private dialogsService: DialogsService) { }

  ngOnInit() {
    this.mainService.getMorosos().subscribe(resp => {
      this.users = resp;
    }, error => this.dialogsService.alert(error, 'Error obteniendo la lista de usuarios', true));
    this.mainService.getCondo().subscribe(resp => {
      this.condo = resp;
    }, error => this.dialogsService.alert(error, 'Error obteniendo la información del condominio', true));
    this.mainService.getAllCuotasByUserId().subscribe(resp => {
      this.cuotas = resp;
    }, err => {

    });
    this.mainService.getUserById(this.auth.getUserId()).subscribe( resp => {
      this.user = resp;
      console.log(this.user);
    }, err => console.log(err));
  }

}
