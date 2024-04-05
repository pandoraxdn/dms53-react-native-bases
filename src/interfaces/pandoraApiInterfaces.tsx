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

export interface SensorDataResponse{
    numberRegisters: number;
    today: TypeToday;
    yesterday: TypeYesterday;
    beforeYesterday: TypeBeforeYesterday;
}

interface TypeToday{
    maxToday: number;
    minToday: number;
    lastToday: Records[];
}

interface TypeYesterday{
    maxYesterday: number;
    minYesterday: number;
    lastYesterday: Records[];
}

interface TypeBeforeYesterday{
    maxBeforeYesterday: number;
    minBeforeYesterday: number;
    lastBeforeYesterday: Records[];
}

interface Records{
    _id:            string;
    fecha:          Date;
    distancia_cm:   number;
    distancia_inch: number;
}

