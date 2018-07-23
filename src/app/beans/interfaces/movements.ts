import { IUser } from './user';

export interface IMovements {
    id: number;
    cantidad: number;
    fecha: string;
    realizado: boolean;
    descripcion: string;
    usuario: IUser;
}
