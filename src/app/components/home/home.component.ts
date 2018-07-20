import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../beans';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public displayName: string;
  public users: IUser[];
  constructor(private auth: AuthService, private mainService: MainService) { }

  ngOnInit() {
    this.displayName = this.auth.getUserDisplayName();
    this.mainService.getUsers().subscribe(resp => {
      this.users = resp;
      console.log(this.users);
    });
  }

}
