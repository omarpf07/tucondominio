import { ICondominium } from './condominium';

export interface IContract {
    id: number;
    numero_casa: number;
    descripcion: string;
    condominio: ICondominium;
}
