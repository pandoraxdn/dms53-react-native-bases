export interface TareasResponse {
    _id:         string;
    titulo:      string;
    descripcion: string;
    estado:      string;
    __v:         number;
}

export interface LoginResponse {
    id_user:  number | string;
    nameuser: string;
    password: string;
    image:    string;
    correo:   string;
    update:   Date | string;
}

export type RequestLogin = LoginResponse | false;

