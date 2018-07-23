import { Component, OnInit } from '@angular/core';
import { Fee } from '../../../beans';
import { AuthService } from '../../../services/auth.service';
import { MainService } from '../../../services/main.service';
import { Router } from '@angular/router';
import { DialogsService } from '../../../services/dialogs.service';

@Component({
  selector: 'app-paymentverify',
  templateUrl: './paymentverify.component.html',
  styleUrls: ['./paymentverify.component.css']
})
export class PaymentverifyComponent implements OnInit {
  fees: Fee[];

  constructor(private auth: AuthService, private mainService: MainService,
    private router: Router, private dialogsService: DialogsService) { }

  ngOnInit() {
    this.getFees();
  }

  getFees() {
    this.mainService.getPendingFees().subscribe(resp => {
      this.fees = resp;
      console.log(this.fees);
    }, error => this.dialogsService.alert(error, 'Error obteniendo la lista de cuotas', true));
  }

  getBack() {
    this.router.navigate(['admin/panel']);
  }

  verifyFee(cuotaId: number) {
    let transactionCode: string;

    this.mainService.verifiyFees(cuotaId).subscribe(resp => {
      console.log(cuotaId);
      transactionCode = resp.codigoVerificacion;
    }, error => this.dialogsService.alert(error, 'La cuota no pudo ser verificada', true),
      () => {
        this.dialogsService.confirm('Pago verificado', `Código de transacción: ${transactionCode}`);
        this.fees.splice(this.fees.findIndex(f => f.cuotaId === cuotaId), 1);
      });
  }
}
