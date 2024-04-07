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

export interface SensorDataResponse {
    numberRegisters: number;
    today:           Today;
    yesterday:       Yesterday;
    beforeYesterday: BeforeYesterday;
}

export interface BeforeYesterday {
    maxBeforeYesterday:  number;
    minBeforeYesterday:  number;
    lastBeforeYesterday: Records[];
}

export interface Today {
    maxToday:  number;
    minToday:  number;
    lastToday: Records[];
}

export interface Yesterday {
    maxYesterday:  number;
    minYesterday:  number;
    lastYesterday: Records[];
}

export interface Records {
    _id:            string;
    fecha:          Date;
    distancia_cm:   number;
    distancia_inch: number;
}
