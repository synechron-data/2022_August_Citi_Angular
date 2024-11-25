import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utilities/custom-validators';

@Component({
  selector: 'validation-form',
  templateUrl: './validation-form.component.html'
})
export class ValidationFormComponent {

  regForm: FormGroup;

  countries = [
    { 'id': "", 'name': 'Select Country' },
    { 'id': 1, 'name': 'India' },
    { 'id': 2, 'name': 'USA' },
    { 'id': 3, 'name': 'UK' }
  ];

  minAge = 20;
  maxAge = 60;

  constructor(private frmBuilder: FormBuilder) {
    this.regForm = this.frmBuilder.group({
      firstname: ["", Validators.required],
      lastname: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(6)
      ])],
      gender: ["", Validators.required],
      age: ["", [
        Validators.required,
        // CustomValidators.ageRange
        CustomValidators.ageRange(this.minAge, this.maxAge)
      ]],
      address: this.frmBuilder.group({
        country: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required],
        fulladdress: ['', Validators.required],
      }),
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  get frm() { return this.regForm.controls; }
  get address() { return (<FormGroup>this.regForm.controls['address']).controls; }

  reset() {
    this.regForm.reset();
  }

  logForm() {
    if (this.regForm.valid) {
      // Code to send the data to the server (Service Call)
      console.log(this.regForm.value);
    } else {
      this.regForm.markAllAsTouched();
      console.error("Invalid Input given!");
    }
  }
}
