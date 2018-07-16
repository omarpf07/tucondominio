import { IContract } from './contract';

export interface IFee {
    id: number;
    cantidad: number;
    pagado: boolean;
    fecha: string;
    contrato: IContract;
}
