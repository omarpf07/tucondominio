export interface IUser {
    usuarioId: number;
    nombre: string;
    apellido: string;
    email: string;
    contraseña: string;
    admin: boolean;
    estado: boolean;
    notificacions: any[];
    CuentaMovimiento: any[];
    contratos: any[];
}
