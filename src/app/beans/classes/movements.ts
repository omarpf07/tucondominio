import { IUser } from '../interfaces';
import { IMovements } from '../interfaces/movements';

export class Movements implements IMovements {

    constructor(public id: number,
        public cantidad: number,
        public fecha: string,
        public realizado: boolean,
        public descripcion: string,
        public usuario: IUser) { }
}
