import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html'
})
export class TemplateDrivenFormComponent {
  logForm(frm: NgForm) {
    if (frm.valid)
      console.log(frm.value);           // Code to submit this data to API call
    else
      console.error("Form is Invalid!");
  }
}
