import { Component, OnInit } from '@angular/core';
import { GrupoEmpresarialServicesService } from '../../services/grupo-empresarial-services.service';
import { Router } from '@angular/router';
import { InformacionGrupoEmpresarial } from '../../interfaces/InformacionGrupoEmpresarial.interface';

@Component({
  selector: 'app-grupo-empresarial-list-page',
  templateUrl: './grupo-empresarial-list-page.component.html',
  styleUrl: './grupo-empresarial-list-page.component.css'
})
export class GrupoEmpresarialListPageComponent implements OnInit {

  public columns: string[] = ['dueno', 'telefono', 'fecha_registro', 'options'];
  public dataSource: InformacionGrupoEmpresarial[] = [];

  constructor(private grupoEmpresarialService: GrupoEmpresarialServicesService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.loadDataSource();
  }

  private loadDataSource() {
    this.grupoEmpresarialService.pagination(0, 10).subscribe(data => {
      this.dataSource = data;
      console.log(data);
    })
  }

  public nuevoGrupoEmpresarial(){
    this.router.navigate(['/content/grupo-empresarial/form']);
  }
}
