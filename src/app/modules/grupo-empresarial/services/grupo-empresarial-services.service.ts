import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { InformacionGrupoEmpresarial } from '../interfaces/InformacionGrupoEmpresarial.interface';
import { GrupoEmpresarial } from '../interfaces/GrupoEmpresarial.interface';

@Injectable({
  providedIn: 'root'
})
export class GrupoEmpresarialServicesService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  pagination(pagenumber: number, pagesize: number): Observable<InformacionGrupoEmpresarial[]> {
    return this.http.get<any>(`${this.baseUrl}/api/grupo_empresarial/pagenumber/${pagenumber}/pagesize/${pagesize}`)
      .pipe(
        map(response => response.grupo_empresarial.content as InformacionGrupoEmpresarial[])
      );
  }

  save(grupoEmpresarial: GrupoEmpresarial): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/grupo_empresarial`, grupoEmpresarial);
  }
}
