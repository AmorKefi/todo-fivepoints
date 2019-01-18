import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppstateService } from '../../services/appstate.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  Name = this.route.snapshot.params.Name;
  Todo: any;
  constructor(private route: ActivatedRoute, private TodosService: AppstateService, private router: Router) { }

  ngOnInit() {
    this.Todo = this.TodosService.getToDoByName(this.Name);
    if (this.Todo.length === 0) {
      this.router.navigateByUrl('/Home');
    }
  }
  Edit(Name) {
    this.router.navigateByUrl('/Edit/' + Name);
  }

}
