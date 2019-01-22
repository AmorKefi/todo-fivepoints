import { Component, OnInit } from '@angular/core';
import { AppstateService } from '../services/appstate.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
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
  constructor(private userservice: AppstateService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      'Email': new FormControl('', Validators.required),
      'Password': new FormControl('', Validators.required)
    });
    // this.afs.list('Users').valueChanges().subscribe(res => console.log(res));
    // // this.afs.list('Users').push({ name: 'aze', lastname: 'qsd' });
    // const parent = this.afs.list('Users/' + 2).push({ name: 'Test', lastname: 'ok' });
    // console.log(parent);
  }
  login() {
    this.userservice.login(this.LoginForm.value).subscribe((res: any) => {
      if (res._id != null) {
        localStorage.setItem('User_ID', JSON.stringify(res._id));
        this.router.navigateByUrl('/Home');
        location.reload(true);
      } else {
        alert(res.message);
      }
    }, err => {
      console.log(err);
    });
  }

}
