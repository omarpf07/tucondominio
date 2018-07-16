import { IUser } from '../interfaces';

export class User implements IUser {
    constructor(public id: number,
        public rol: boolean,
        public nombre: string,
        public apellido: string,
        public nombre_usuario: string,
        public contrasena: string) { }
}
