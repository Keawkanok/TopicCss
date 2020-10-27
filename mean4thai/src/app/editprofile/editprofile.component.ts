import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  validationForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.validationForm = fb.group({
      emailFormEx: [null, [Validators.required, Validators.email]],
      passwordFormEx: [null, Validators.required],
    });
  }

  get emailFormEx() { return this.validationForm.get('emailFormEx'); }
  get passwordFormEx() { return this.validationForm.get('passwordFormEx'); }

  ngOnInit(): void {
  }

}
