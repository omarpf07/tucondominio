import { IContract, ICondominium } from '../interfaces';

export class Contract implements IContract {
    constructor(
        public id: number,
        public numero_casa: number,
        public descripcion: string,
        public condominio: ICondominium
    ) { }

}
