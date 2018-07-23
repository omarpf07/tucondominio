import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent {

  public title: string;
  public message: string;
  public isError: boolean;

  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>) {

  }

}
