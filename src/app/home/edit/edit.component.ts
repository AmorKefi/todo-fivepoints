import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AppstateService } from '../../services/appstate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  EditForm: FormGroup;
  Todo = this.Service.getToDoByName(this.Activatedroute.snapshot.params.Name);
  constructor(private fb: FormBuilder, private router: Router, private Service: AppstateService,
    private Activatedroute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.EditForm = this.fb.group({
      'Name': new FormControl(this.Todo[0].Name),
      'done': new FormControl(this.Todo[0].done)
    });
  }
  Cancel() {
    this.location.back();
  }
  Edit() {
    console.log(this.EditForm.value);
    this.Service.EditTodo(this.Todo[0].Name, this.EditForm.value);
  }
}
