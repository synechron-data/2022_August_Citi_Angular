// import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'reactive-form',
//   templateUrl: './reactive-form.component.html'
// })
// export class ReactiveFormComponent {
//   regForm: FormGroup;

//   constructor() {
//     this.regForm = new FormGroup({
//       firstname: new FormControl(),
//       lastname: new FormControl(),
//       address: new FormGroup({
//         city: new FormControl(),
//         zip: new FormControl()
//       })
//     });
//   }

//   reset() {
//     this.regForm.reset();
//   }

//   set() {
//     this.regForm.setValue({
//       firstname: "Abhijeet",
//       lastname: "Gole",
//       address: {
//         city: "Pune",
//         zip: 411021
//       }
//     });
//   }

//   patch() {
//     this.regForm.patchValue({
//       firstname: "Ramakant",
//       lastname: "Debata"
//     });
//   }

//   logForm() {
//     console.log(this.regForm.value);
//   }
// }

// ---------------------------------------------------------- FormBuilder

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
  regForm: FormGroup;

  constructor(private frmBuilder: FormBuilder) {
    this.regForm = this.frmBuilder.group({
      firstname: '',
      lastname: '',
      address: this.frmBuilder.group({
        city: '',
        zip: ''
      })
    });
  }

  reset() {
    this.regForm.reset();
  }

  set() {
    this.regForm.setValue({
      firstname: "Abhijeet",
      lastname: "Gole",
      address: {
        city: "Pune",
        zip: 411021
      }
    });
  }

  patch() {
    this.regForm.patchValue({
      firstname: "Ramakant",
      lastname: "Debata"
    });
  }

  logForm() {
    console.log(this.regForm.value);
  }
}
