import { ICondominium } from '../interfaces';

export class Condominium implements ICondominium {
    constructor(public id: number,
        public nombre: string,
        public precioActual: number,
        public direccion: string,
        public fondos: string,
        public dia_cuota: number,
        public cuenta: string) { }
}
