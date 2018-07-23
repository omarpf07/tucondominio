import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../../../services/main.service';
import { DialogsService } from '../../../services/dialogs.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-feepayment',
  templateUrl: './feepayment.component.html',
  styleUrls: ['./feepayment.component.css']
})
export class FeepaymentComponent implements OnInit {

  public pagarCuotaForm: FormGroup;

  constructor(private mainService: MainService, private dialogsService: DialogsService,
    private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.pagarCuotaForm = this.fb.group({
      amount: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit() {
  }

}
