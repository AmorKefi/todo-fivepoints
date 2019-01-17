import { Component, OnInit } from '@angular/core';
import { AppstateService } from '../services/appstate.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any = this.userservice.getConnected()[0];
  constructor(private userservice: AppstateService, private fb: FormBuilder) { }
  TodosForm: FormGroup;
  Todos: any;
  ngOnInit() {
    this.Todos = this.userservice.getTodos();
    this.TodosForm = this.fb.group({
      'Name': new FormControl('', Validators.required)
    });
  }
  Create() {
    this.TodosForm.value.user = this.user;
    this.TodosForm.value.done = false;
    this.userservice.Createtodo(this.TodosForm.value);
    this.ngOnInit();
  }
}
