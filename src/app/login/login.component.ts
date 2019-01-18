import { Component, OnInit } from '@angular/core';
import { AppstateService } from '../services/appstate.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
export interface Todos {
  Done: Boolean;
  Name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: Boolean = false;
  LoginForm: FormGroup;
  constructor(private userservice: AppstateService, private fb: FormBuilder, private afs: AngularFireDatabase) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      'Username': new FormControl('', Validators.required),
      'Password': new FormControl('', Validators.required)
    });
    // this.afs.list('Users').valueChanges().subscribe(res => console.log(res));
    // // this.afs.list('Users').push({ name: 'aze', lastname: 'qsd' });
    // const parent = this.afs.list('Users/' + 2).push({ name: 'Test', lastname: 'ok' });
    // console.log(parent);
  }
  login() {
    this.errorMessage = !this.userservice.login(this.LoginForm.value);
  }

}
