import { of, throwError } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { LoginComponent } from './login.component';
import { render } from '@testing-library/angular';
import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/angular'; // ✅ Agrega esta línea
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

describe('LoginComponent', () => {
  let authServiceMock: jest.Mocked<AuthService>;

  beforeEach(async () => {
    authServiceMock = {
      login: jest.fn(),
    } as unknown as jest.Mocked<AuthService>;

    delete (window as any).location;
    window.location = { href: '' } as any;
  });

  it('Should redirect to the dashboard', async () => {
    //Given
    authServiceMock.login.mockReturnValueOnce(of({ token: 'fake-jwt-token' }));

    await render(LoginComponent, {
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    });

    // When
    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'user@example.com'
    );
    await userEvent.type(
      screen.getByPlaceholderText('Password'),
      'password1234'
    );
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    // Then
    expect(authServiceMock.login).toHaveBeenCalledWith(
      'user@example.com',
      'password1234'
    );
    expect(window.location.href).toBe('/dashboard');
  });

  it('Should throw an error when the login fails', async () => {
    //Given
    authServiceMock.login.mockReturnValueOnce(
      throwError(() => {
        error: {
          message: 'Invalid email or password';
        }
      })
    );

    await render(LoginComponent, {
      providers: [{ provide: AuthService, useValue: authServiceMock }],
    });

    // When
    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'user@example.com'
    );
    await userEvent.type(
      screen.getByPlaceholderText('Password'),
      'wrongPassword'
    );
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    // Then
    expect(authServiceMock.login).toHaveBeenCalledWith(
      'user@example.com',
      'wrongPassword'
    );
    const errorMessage = await screen.findByText('Invalid email or password');
    expect(errorMessage).toBeTruthy();
  });
});
