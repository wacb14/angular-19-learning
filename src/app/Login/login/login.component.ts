import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  ReactiveFormsModule,
  NonNullableFormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  errorMessage: string | null = null;
  authService = inject(AuthService);
  fb = inject(NonNullableFormBuilder);

  loginForm = this.fb.group<LoginForm>({
    email: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    const { email, password } = this.loginForm.getRawValue();
    this.authService.login(email, password).subscribe({
      next: () => {
        window.location.href = '/dashboard';
      },
      error: (_error) => {
        this.errorMessage = 'Invalid email or password';
      },
    });
  }
}
