import { IContract, ICondominium } from '../interfaces';

export class Contract implements IContract {
    id: number;
    numero_casa: number;
    descripcion: string;
    condominio: ICondominium;
}
