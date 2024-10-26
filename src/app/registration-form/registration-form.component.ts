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

  // Password criteria flags
  passwordLength: boolean = false;
  hasUppercase: boolean = false;
  hasLowercase: boolean = false;
  hasNumber: boolean = false;
  hasSpecialChar: boolean = false;

  // Toggle to show password criteria
  showPasswordCriteria: boolean = false;

  // Method to check if passwords match
  get passwordMismatch(): boolean {
    return this.password !== this.confirmPassword && this.confirmPassword.length > 0;
  }

  // Method to check password criteria
  checkPasswordCriteria(): void {
    const password = this.password || '';
    this.passwordLength = password.length >= 8;
    this.hasUppercase = /[A-Z]/.test(password);
    this.hasLowercase = /[a-z]/.test(password);
    this.hasNumber = /\d/.test(password);
    this.hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  }

  // New method to check if password meets all criteria
  isPasswordValid(): boolean {
    return (
      this.passwordLength &&
      this.hasUppercase &&
      this.hasLowercase &&
      this.hasNumber &&
      this.hasSpecialChar
    );
  }

  // Check form validity before enabling the submit button
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
      this.isPasswordValid() // Ensure password criteria are met
    );
  }

  // Submit action
  submitForm() {
    if (this.isFormValid()) {
      alert('Registration Successful!');
      console.log('Form submitted:', {
        nric: this.nric,
        password: this.password,
        firstName: this.firstName,
        dob: this.dob,
        phone: this.phone,
        gender: this.gender,
        nationality: this.nationality
      });
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
