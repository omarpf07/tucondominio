import { MainService } from './../../../services/main.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { IFee } from '../../../beans/interfaces/fee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewfee',
  templateUrl: './viewfee.component.html',
  styleUrls: ['./viewfee.component.css']
})
export class ViewfeeComponent implements OnInit {

  public cuota: IFee;
  public id: number;

  constructor(public auth: AuthService, private mainService: MainService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.mainService.get1CuotaById(this.id).subscribe(resp => {
      this.cuota = resp;
      console.log(this.cuota);
    }, err => console.log(err));
  }

  print() {
    window.print();
  }
}
