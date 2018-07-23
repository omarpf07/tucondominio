import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../../../services/main.service';
import { DialogsService } from '../../../services/dialogs.service';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feepayment',
  templateUrl: './feepayment.component.html',
  styleUrls: ['./feepayment.component.css']
})
export class FeepaymentComponent implements OnInit {

  public pagarCuotaForm: FormGroup;
  public id: number;
  constructor(private mainService: MainService, private dialogsService: DialogsService,
    private fb: FormBuilder, private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pagarCuotaForm = this.fb.group({
      amount: ['', [Validators.required, Validators.minLength(1)]]
    });

    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  onSubmit() {
    this.mainService.pagarCuota(this.id, this.pagarCuotaForm.controls['amount'].value).subscribe(res => {
      console.log(res);
    }, err => console.log(err));
    console.log('hola');
  }

}
