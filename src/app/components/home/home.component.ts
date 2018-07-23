import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IUser, ICondominium } from '../../beans';
import { MainService } from '../../services/main.service';
import { DialogsService } from '../../services/dialogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public displayName: string;
  public users: IUser[];
  public condo: ICondominium;
  constructor(private auth: AuthService, private mainService: MainService,
    private dialogsService: DialogsService) { }

  ngOnInit() {
    this.displayName = this.auth.getUserDisplayName();
    this.mainService.getMorosos().subscribe(resp => {
      this.users = resp;
      console.log(this.users);
    }, error => this.dialogsService.alert(error, 'Error!', true));
    this.mainService.getCondo().subscribe(resp => {
      this.condo = resp;
      console.log(this.condo);
    }, error => this.dialogsService.alert(error, 'Error!', true));
  }

}
