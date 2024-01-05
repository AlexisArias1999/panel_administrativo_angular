import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InformacionGrupoEmpresarial } from '../../interfaces/InformacionGrupoEmpresarial.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformacionTecnica } from '../../interfaces/InformacionTecnica.interface';
import { ValidatorsService } from '../../../../shared/services/validators.service';
import { GrupoEmpresarial } from '../../interfaces/GrupoEmpresarial.interface';
import { InformacionGrupoEmpresarialVersion } from '../../interfaces/InformacionGrupoEmpresarialVersion.interface';
import { GrupoEmpresarialServicesService } from '../../services/grupo-empresarial-services.service';

@Component({
  selector: 'app-grupo-empresarial-form-page',
  templateUrl: './grupo-empresarial-form-page.component.html',
  styleUrl: './grupo-empresarial-form-page.component.css'
})
export class GrupoEmpresarialFormPageComponent {

  constructor(private router: Router, private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService, private grupoEmpresarialService: GrupoEmpresarialServicesService) {

  }

  public dataInformacionGrupoEmpresarial: InformacionGrupoEmpresarial[] = [];
  public columns: string[] = ['razon_social', 'ruc', 'facturacion'];

  public formGrupoEmpresarial: FormGroup = this.formBuilder.group({
    codigo: ['', Validators.required],
    correo: ['', Validators.required],
    nombres: ['', Validators.required],
    contacto: [''],
    telefono: [''],
    estado: [true],
    informacion_grupo_empresarial: this.formBuilder.group({
      id: 0,
      informacion_tecnica: this.formBuilder.group({
        id: 0,
        // versiones: this.formBuilder.group({
        //   id: 0,
        //   fecha_registro: ['', Validators.required],
        //   version: ['', Validators.required],
        //   descripcion: ['', Validators.required],
        //   produccion: [false, { nonNullable: true }],
        // }),
        ubicacion: ['', Validators.required],
        servidor: ['', Validators.required],
        db: ['', Validators.required],
        usuario: ['', Validators.required],
        clave: ['', Validators.required],
        facturacion: [false, { nonNullable: true }],
        estado: [true],
      }),
      ruc: ['', Validators.required],
      razon_social: ['', Validators.required],
      representante_legal: ['', Validators.required],
      telefono: [''],
      direccion: [''],
      pais: [''],
      estado: [true],
    })
  })

  isValidFieldGrupoEmpresarial(field: string) {
    return this.validatorsService.isValidField(this.formGrupoEmpresarial, field);
  }

  isValidFieldInformacionGrupoEmpresarial(field: string) {
    return this.validatorsService.isValidField(this.formGrupoEmpresarial.get('informacion_grupo_empresarial') as FormGroup, field);
  }

  isValidFieldInformacionTecnica(field: string) {
    return this.validatorsService.isValidField(this.formGrupoEmpresarial.get('informacion_grupo_empresarial')?.get('informacion_tecnica') as FormGroup, field);
  }

  get getInformacionGrupoEmpresarial(): InformacionGrupoEmpresarial {
    const informacion = this.formGrupoEmpresarial.get('informacion_grupo_empresarial')?.value as InformacionGrupoEmpresarial;
    return informacion;
  }

  get getInformacionTecnica(): InformacionTecnica {
    const informacion = this.formGrupoEmpresarial.get('informacion_grupo_empresarial')?.get('informacion_tecnica')?.value as InformacionTecnica;
    return informacion;
  }

  get getGrupoEmpresarial(): GrupoEmpresarial {
    const informacion = this.formGrupoEmpresarial.value;
    return informacion;
  }


  public agregarInformacionGrupoEmpresarial() {
    const grupoEmpresarial = this.formGrupoEmpresarial.get('informacion_grupo_empresarial');
    if (grupoEmpresarial) {
      if (grupoEmpresarial.invalid) {
        console.log(this.formGrupoEmpresarial.controls);
        grupoEmpresarial.markAllAsTouched();
        const informacionTecnica = grupoEmpresarial.get('informacion_tecnica');
        if (informacionTecnica) {
          if (informacionTecnica.invalid) {
            console.log(this.formGrupoEmpresarial.controls);
            informacionTecnica.markAllAsTouched();
            return;
          }
        }
      }
    }
    const informacionTecnica: InformacionTecnica[] = [{
      ubicacion: this.getInformacionTecnica.ubicacion,
      servidor: this.getInformacionTecnica.servidor,
      db: this.getInformacionTecnica.db,
      usuario: this.getInformacionTecnica.usuario,
      clave: this.getInformacionTecnica.clave,
      facturacion: this.getInformacionTecnica.facturacion,
      estado: true
    }];
    const informacionGrupo: InformacionGrupoEmpresarial = {
      informacion_tecnica: informacionTecnica,
      razon_social: this.getInformacionGrupoEmpresarial.razon_social,
      representante_legal: this.getInformacionGrupoEmpresarial.representante_legal,
      ruc: this.getInformacionGrupoEmpresarial.ruc,
      telefono: this.getInformacionGrupoEmpresarial.telefono,
      direccion: this.getInformacionGrupoEmpresarial.telefono,
      pais: this.getInformacionGrupoEmpresarial.pais,
      fecha_inicio: new Date,
      estado: true,
    };
    this.dataInformacionGrupoEmpresarial.push(informacionGrupo);
    this.limpiarCampos();
  }

  public guardarGrupoEmpresarial() {
    const grupo: GrupoEmpresarial = this.getGrupoEmpresarial;
    const versiones: InformacionGrupoEmpresarialVersion[] = [];
    this.dataInformacionGrupoEmpresarial.forEach(m => {
      if (m.informacion_tecnica) {
        m.informacion_tecnica.forEach(i => {
          i.versiones = versiones;
        })
      }
    });
    grupo.informacion_grupo_empresarial = this.dataInformacionGrupoEmpresarial;
    this.grupoEmpresarialService.save(grupo).subscribe(data => {
      if (data.status == 200) {
        this.router.navigate(['/content/grupo-empresarial/list']);
      }
    });
  }

  private limpiarCampos() {
    this.formGrupoEmpresarial.patchValue({
      informacion_grupo_empresarial: {
        informacion_tecnica: {
          ubicacion: '',
          servidor: '',
          db: '',
          usuario: '',
          clave: '',
          facturacion: false
        },
        razon_social: '',
        representante_legal: '',
        pais: '',
        ruc: '',
        telefono: '',
        direccion: ''
      }
    });
    this.formGrupoEmpresarial.get('informacion_grupo_empresarial')?.reset();
  }

}
