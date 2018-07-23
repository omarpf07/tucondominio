import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { AlertDialogComponent } from '../components//alert-dialog/alert-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Injectable()
export class DialogsService {
  constructor(private dialog: MatDialog) { }

  public confirm(title?: string, message?: string): Observable<boolean> {
    let dialogRef: MatDialogRef<ConfirmDialogComponent>;
    dialogRef = this.dialog.open(ConfirmDialogComponent);
    
    const titleToShow = ((title != null && title !== '') ? title : 'Warning!');
    const messageToShow = ((message != null && message !== '') ? message :
      'You have unsaved changes. Press <b>CANCEL</b> to go back and save these changes, or <b>OK</b> to lose these changes.');
    dialogRef.componentInstance.title = titleToShow;
    dialogRef.componentInstance.message = messageToShow;

    return dialogRef.afterClosed();
  }

  public alert(message?: string, title?: string, isError: boolean = false): Observable<boolean> {
    let dialogRef: MatDialogRef<AlertDialogComponent>;
    dialogRef = this.dialog.open(AlertDialogComponent);

    const titleToShow = ((title != null && title !== '') ? title : 'Alert!');
    const messageToShow = ((message != null && message !== '') ? message : ((isError) ? 'Unexpected Error...' : ''));
    dialogRef.componentInstance.title = titleToShow;
    dialogRef.componentInstance.message = messageToShow;
    dialogRef.componentInstance.isError = isError;

    return dialogRef.afterClosed();
  }
}
