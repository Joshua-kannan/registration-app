import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent {
  nric: string = '';
  password: string = '';
  confirmPassword: string = '';
  firstName: string = '';
  lastName: string = '';
  dob: string = '';
  gender: string = '';
  phone: string = '';
  nationality: string = '';

  passwordLength: boolean = false;
  hasUppercase: boolean = false;
  hasLowercase: boolean = false;
  hasNumber: boolean = false;
  hasSpecialChar: boolean = false;
  showPasswordCriteria: boolean = false;
  formSubmitted: boolean = false;  // Track submission status

  get passwordMismatch(): boolean {
    return this.password !== this.confirmPassword && this.confirmPassword.length > 0;
  }

  checkPasswordCriteria(): void {
    const password = this.password || '';
    this.passwordLength = password.length >= 8;
    this.hasUppercase = /[A-Z]/.test(password);
    this.hasLowercase = /[a-z]/.test(password);
    this.hasNumber = /\d/.test(password);
    this.hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  }

  isPasswordValid(): boolean {
    return (
      this.passwordLength &&
      this.hasUppercase &&
      this.hasLowercase &&
      this.hasNumber &&
      this.hasSpecialChar
    );
  }

  isFormValid(): boolean {
    return (
      this.nric !== '' &&
      this.password !== '' &&
      this.confirmPassword !== '' &&
      !this.passwordMismatch &&
      this.firstName !== '' &&
      this.dob !== '' &&
      this.gender !== '' &&
      this.phone !== '' &&
      this.nationality !== '' &&
      this.isPasswordValid()
    );
  }

  submitForm() {
    if (this.isFormValid()) {
      this.formSubmitted = true;
    }
  }
}
