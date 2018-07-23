import { IFee, IContract } from '../interfaces';

export class Fee implements IFee {
    constructor(
        public cuotaId: number,
        public fechaInicio: Date,
        public fechaPago: Date,
        public codigoVerificacion: string,
        public contrato: IContract,
        public cantidad: number) { }
}
