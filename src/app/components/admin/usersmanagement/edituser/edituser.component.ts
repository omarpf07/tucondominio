import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from '../../../../beans';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  public user: IUser;
  public password: string;
  public id: number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = +params['id'];
    });
  }

  goBack() {
    this.router.navigate(['admin/usersmanagement']);
  }

}
