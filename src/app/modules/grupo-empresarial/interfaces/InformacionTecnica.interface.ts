import { InformacionGrupoEmpresarialVersion } from "./InformacionGrupoEmpresarialVersion.interface";

export interface InformacionTecnica {
    id?: number;
    versiones?: InformacionGrupoEmpresarialVersion[];
    ubicacion: string;
    servidor: string;
    db: string;
    usuario: string;
    clave: string;
    facturacion: boolean;
    fecha_registro?: Date;
    fecha_modificacion?: Date;
    estado: boolean;
}