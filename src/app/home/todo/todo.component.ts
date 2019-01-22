import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppstateService } from '../../services/appstate.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  index = Number(this.route.snapshot.params.index);
  Todo: any = JSON.parse(localStorage.getItem('User_Info')).Todos;
  constructor(private route: ActivatedRoute, private TodosService: AppstateService, private router: Router) { }

  ngOnInit() {
    for (let i = 0; i <= this.Todo.length; i++) {
      if (i === this.index) {
        this.Todo = this.Todo[i];
      }
    }
    // if (this.Todo.length === 0) {
    //   this.router.navigateByUrl('/Home');
    // }
  }
  Edit(Name) {
    this.router.navigateByUrl('/Edit/' + Name);
  }

}
