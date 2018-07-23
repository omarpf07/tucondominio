import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MainService } from '../../services/main.service';
import { DialogsService } from '../../services/dialogs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private auth: AuthService, private fb: FormBuilder, private mainService: MainService,
    private router: Router, private dialogsService: DialogsService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  onSubmit(form: FormGroup) {
    const values = form.value;
    this.loginForm.disable();
    this.mainService.logIn(values.username, values.password).subscribe(data => {
      this.auth.setAllUserData(data);
      this.auth.isLoggedInBehavior.next(true);
      this.router.navigate(['/home']);
    }, error => {
      console.log(error);
      this.dialogsService.alert(error, 'Usuario y/o contraseña inválidos', true);
      this.loginForm.enable();
    });
  }

}
