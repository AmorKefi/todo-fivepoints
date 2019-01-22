import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AppstateService } from '../services/appstate.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export class User {
  username: string;
  email: String;
  Todos: Array<any>;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  constructor(private fb: FormBuilder, private userservice: AppstateService, private router: Router) {
  }

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
    this.userservice.Register(this.RegisterForm.value).subscribe((res: any) => {
      res.ok === 1 ? this.router.navigateByUrl('/Login') : this.router.navigateByUrl('/Register');
    }, err => {
      console.log(err);
    });
  }
}
