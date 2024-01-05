import { InformacionGrupoEmpresarial } from "./InformacionGrupoEmpresarial.interface";

export interface GrupoEmpresarial {
    id?: number;
    codigo: string;
    nombres: string;
    correo: string;
    contacto: string;
    telefono: string;
    informacion_grupo_empresarial: InformacionGrupoEmpresarial[];
    fecha_registro?: Date;
    fecha_modificacion?: Date;
    estado: boolean;
}