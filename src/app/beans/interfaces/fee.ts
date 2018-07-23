import { IContract } from './contract';

export interface IFee {
    cuotaId: number;
    contrato: IContract;
    cantidad: number;
    fechaInicio: Date;
    fechaPago: Date;
    codigoVerificacion: string;

}
