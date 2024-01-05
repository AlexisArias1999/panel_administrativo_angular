import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrl: './auth-login-page.component.css'
})
export class AuthLoginPageComponent {

  constructor(private formBuilder: FormBuilder, private validatorsService: ValidatorsService,
    private router: Router) {

  }

  public myForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(this.validatorsService.emailPattern)]],
    password: ['', [Validators.required]]
  });

  isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  login() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/content']);
  }

}
