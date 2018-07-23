import { IUser } from './user';
import { ICondominium } from './condominium';

export interface IContract {
    id: number;
    numeroCasa: number;
    descripcion: string;
    condominio: ICondominium;
    usuario: IUser;
}
