import { IContract, ICondominium, IUser } from '../interfaces';

export class Contract implements IContract {
    constructor(
        public id: number,
        public numeroCasa: number,
        public descripcion: string,
        public condominio: ICondominium,
        public usuario: IUser
    ) { }

}
