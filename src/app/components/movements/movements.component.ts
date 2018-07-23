import { Component, OnInit } from '@angular/core';
import { IMovements } from '../../beans';
import { Router } from '@angular/router';
import { MainService } from '../../services/main.service';
import { DialogsService } from '../../services/dialogs.service';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {

  public movimientos: IMovements[];

  constructor(private router: Router, private mainService: MainService, private dialogsService: DialogsService) { }

  ngOnInit() {
    this.mainService.getMovimientos().subscribe(resp => {
      this.movimientos = resp;
    }, err => console.log(err));
  }

}
