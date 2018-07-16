import { IFee, IContract } from '../interfaces';

export class Fee implements IFee {
    constructor(public id: number,
        public cantidad: number,
        public pagado: boolean,
        public fecha: string,
        public contrato: IContract) { }
}
