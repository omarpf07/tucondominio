import { Contract } from './../../../beans/classes/contract';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../beans';
import { AuthService } from '../../../services/auth.service';
import { MainService } from '../../../services/main.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../beans/classes/user';
import { Router } from '@angular/router';
import { DialogsService } from '../../../services/dialogs.service';

@Component({
  selector: 'app-usersmanagement',
  templateUrl: './usersmanagement.component.html',
  styleUrls: ['./usersmanagement.component.css']
})
export class UsersmanagementComponent implements OnInit {
  public addUser = false;
  public users: IUser[];
  public userCreationForm: FormGroup;

  constructor(private auth: AuthService, private mainService: MainService, private fb: FormBuilder,
    private router: Router, private dialogsService: DialogsService) {
    this.userCreationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      isAdmin: ['', Validators.required],
      houseNumber: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.mainService.getUsers().subscribe(resp => {
      this.users = resp;
      console.log(this.users);
    }, error => this.dialogsService.alert(error, 'Error obteniendo la lista de usuarios', true));
  }

  getBack() {
    this.router.navigate(['admin/panel']);
  }

  createUser() {
    const user = new User(null, this.userCreationForm.controls['firstName'].value, this.userCreationForm.controls['lastName'].value,
      this.userCreationForm.controls['email'].value,
      this.userCreationForm.controls['password'].value, this.userCreationForm.controls['isAdmin'].value, true, null, null);
    this.mainService.createUser(user).subscribe(() => {
      console.log(user);
      this.getUsers();
      this.userCreationForm.reset();
      this.addUser = false;
    }, error => this.dialogsService.alert(error, 'Error creando usuario', true));
    const contrato = new Contract(null, this.userCreationForm.controls['houseNumber'].value,
      this.userCreationForm.controls['houseNumber'].value, null);
    this.mainService.addContrato(contrato).
      subscribe(resp => { }, error => this.dialogsService.alert(error, 'Error creando contrato', true));
  }
}
