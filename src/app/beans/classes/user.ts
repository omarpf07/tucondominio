import { IUser } from '../interfaces';

export class User implements IUser {
    constructor(
        public usuarioId: number,
        public nombre: string,
        public apellido: string,
        public email: string,
        public contraseña: string,
        public admin: boolean,
        public estado: boolean,
        public notificacions: any[],
        public CuentaMovimiento: any[],
        public contratos: any[],
    ) { }
}
