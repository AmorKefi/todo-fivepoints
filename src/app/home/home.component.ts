import { Component, OnInit } from '@angular/core';
import { AppstateService } from '../services/appstate.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any = [];
  constructor(private userservice: AppstateService, private fb: FormBuilder, private router: Router) { }
  TodosForm: FormGroup;
  Todos: any;
  ngOnInit() {
    // this.Todos = this.userservice.getTodos();
    this.userservice.getUserById(localStorage.getItem('User_ID')).subscribe((res: any) => {
      localStorage.setItem('User_Info', JSON.stringify(res));
      if (res.Todos === undefined) {
        res.Todos = [];
      }
      this.user = res;
    }, err => {
      console.log(err);
    });
    this.TodosForm = this.fb.group({
      'Name': new FormControl('', Validators.required)
    });
  }
  Create() {
    this.TodosForm.value.done = false;
    console.log(this.TodosForm.value);
    const Todo = this.user.Todos;
    Todo.push(this.TodosForm.value);
    console.log(Todo);
    const newUser = {
      ...this.user,
      'Todos': Todo
    };
    console.log(newUser);
    // this.userservice.Createtodo(this.TodosForm.value).subscribe(res => {
    //   console.log(res);
    // }, err => {
    //   console.log(err);
    // });
    // this.ngOnInit();
    this.userservice.updateUser(newUser).subscribe((res: any) => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
  View(Name) {
    this.router.navigateByUrl('/Todo/' + Name);
  }
}
