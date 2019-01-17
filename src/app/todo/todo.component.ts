import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id = this.route.snapshot.params.id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.id);
  }

}
