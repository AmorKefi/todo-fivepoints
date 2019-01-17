import { Component, OnInit } from '@angular/core';
import { AppstateService } from '../services/appstate.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: Boolean = false;
  LoginForm: FormGroup;
  constructor(private userservice: AppstateService, private fb: FormBuilder) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      'Username': new FormControl('', Validators.required),
      'Password': new FormControl('', Validators.required)
    });
  }
  login() {
    this.errorMessage = !this.userservice.login(this.LoginForm.value);
  }

}
