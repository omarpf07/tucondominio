import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../beans';
import { AuthService } from '../../../services/auth.service';
import { MainService } from '../../../services/main.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../beans/classes/user';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Router } from '@angular/router';

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
    private modal: NgxSmartModalService, private router: Router) {
    this.userCreationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      isAdmin: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.mainService.getUsers().subscribe(resp => {
      this.users = resp;
      console.log(this.users);
    });
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
    }, err => {
      console.log(err);
    });
  }
}
