import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AppstateService } from '../services/appstate.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

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
  result;
  constructor(private fb: FormBuilder, private userservice: AppstateService, private firebaseAuth: AngularFireAuth,
    private Db: AngularFireDatabase) {
    this.result = this.Db.list('Users').snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

  }

  ngOnInit() {
    this.RegisterForm = this.fb.group(
      {
        'Username': new FormControl('', Validators.required),
        'Password': new FormControl('', Validators.required),
        'Email': new FormControl('', [Validators.required, Validators.email])
      }
    );
    console.log(this.result)
  }

  Register() {
    // this.userservice.Register(this.RegisterForm.value);
    this.firebaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res => {
      const uid = res.user.uid;
      this.Db.list('Users/').push({ uid, Username: res.user.displayName, Email: res.user.email, Todos: [] });
    });
  }
}
