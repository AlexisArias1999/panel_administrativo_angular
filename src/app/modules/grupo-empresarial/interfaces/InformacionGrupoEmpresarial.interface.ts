import { InformacionTecnica } from "./InformacionTecnica.interface";

export interface InformacionGrupoEmpresarial {
    id?: number;
    informacion_tecnica?: InformacionTecnica[];
    razon_social: string;
    representante_legal: string;
    ruc: string;
    telefono: string;
    direccion: string;
    pais: string;
    fecha_inicio: Date;
    fecha_termino?: Date;
    fecha_registro?: Date;
    fecha_modificacion?: Date;
    estado: boolean;
}