import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AppstateService } from '../services/appstate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  constructor(private fb: FormBuilder, private userservice: AppstateService) { }

  ngOnInit() {
    this.RegisterForm = this.fb.group(
      {
        'Username': new FormControl('', Validators.required),
        'Password': new FormControl('', Validators.required),
        'Email': new FormControl('', [Validators.required, Validators.email])
      }
    );
  }

  Register() {
    this.userservice.Register(this.RegisterForm.value);
  }
}
