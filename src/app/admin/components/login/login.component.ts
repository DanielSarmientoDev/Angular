import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formsBuilder: FormBuilder) {
    this.buildFormLogin();
  }

  ngOnInit(): void {}

  saveAccount(event: Event) {
    event.preventDefault();
    const a = this.form.value;
    if (this.form.valid) {
      console.log(a);
    }
  }

  buildFormLogin() {
    this.form = this.formsBuilder.group({
      email: ['', [Validators.required]],

      password: ['', [Validators.required]],
    });
  }
}
