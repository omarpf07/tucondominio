import { MainService } from './../../../../services/main.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from '../../../../beans';
import { DialogsService } from '../../../../services/dialogs.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  public user: IUser;
  public password: string;
  public id: number;
  constructor(private router: Router, private route: ActivatedRoute, private mainService: MainService,
    private dialogsService: DialogsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.mainService.getUserById(this.id).subscribe(resp => {
      this.user = resp;
      this.password = resp.contraseña;
      console.log(this.user);
    }, err => console.log(err));
  }

  goBack() {
    this.router.navigate(['admin/usersmanagement']);
  }

  actualizar() {
    console.log(this.user);
    this.mainService.updateUser(this.user).subscribe(resp => { }, err => console.log(err), () => {
      this.dialogsService.confirm('Alerta', 'Cambios realizados con exito.');
    });
  }

}
