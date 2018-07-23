import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  nombre: any;        // Nombre
  apellido: any;      // Apellido
  usuario: any;       // Nombre de Usuario
  password: any;       // Contrasena

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['admin/usersmanagement']);
  }

}
