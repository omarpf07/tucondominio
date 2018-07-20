export interface IUser {
    usuarioId: number;
    nombre: string;
    apellido: string;
    email: string;
    contraseña: string;
    admin: boolean;
    estado: boolean;
    CuentaMovimiento: any[];
    contratos: any[];
}
