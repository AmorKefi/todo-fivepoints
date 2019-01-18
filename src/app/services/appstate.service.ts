import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppstateService implements OnInit {
  Usersdb = localStorage.getItem('Users');
  Connected = localStorage.getItem('Conected');
  constructor(private router: Router) { }
  ngOnInit() {
    if (this.Usersdb == null) {
      localStorage.setItem('Users', '');
      this.Usersdb = localStorage.getItem('Users');
    }
  }
  login(userCredential): boolean {
    let users: Array<any> = [];
    if (this.Usersdb == null) {
      return false;
    } else {
      users = JSON.parse(localStorage.getItem('Users'));
      const find = users.find(user => (userCredential.Username === user.Username));
      if (find != null) {
        if (find.Password === userCredential.Password) {
          const Connected = users.filter(user => userCredential.Username === user.Username);
          localStorage.setItem('Conected', JSON.stringify(Connected));

          this.router.navigateByUrl('/Home');
          location.reload(true);
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  Register(user) {
    let users: Array<any> = [];
    if (this.Usersdb === null) {
      users.push(user);
      localStorage.setItem('Users', JSON.stringify(users));
      this.Usersdb = localStorage.getItem('Users');
      localStorage.setItem('Conected', JSON.stringify(users));
      this.router.navigateByUrl('/Home');
    } else {
      users = JSON.parse(this.Usersdb);
      users.push(user);
      localStorage.setItem('Users', JSON.stringify(users));
      this.Usersdb = localStorage.getItem('Users');
      const Connected: Array<any> = [];
      Connected.push(user);
      localStorage.setItem('Conected', JSON.stringify(Connected));
      location.reload(true);
      this.router.navigateByUrl('/Home');
    }
  }
  getConnected() {
    return JSON.parse(localStorage.getItem('Conected'));
  }
  logout() {
    localStorage.removeItem('Conected');
    this.router.navigateByUrl('/Login');
    location.reload(true);
  }
  getTodos() {
    let Todos: Array<any> = JSON.parse(localStorage.getItem('Todos'));
    const result: Array<any> = [];
    if (Todos != null) {
      Todos = JSON.parse(localStorage.getItem('Todos'));
      Todos.forEach(todo => {
        if (todo.user.Username === JSON.parse(this.Connected)[0].Username) {
          result.push(todo);
        }
      });
    } else {
      return null;
    }
    return result;
  }
  Createtodo(Todo) {
    let Todos: Array<any> = [];
    if (localStorage.getItem('Todos') === null) {
      Todos.push(Todo);
      localStorage.setItem('Todos', JSON.stringify(Todos));
    } else {
      Todos = JSON.parse(localStorage.getItem('Todos'));
      Todos.push(Todo);
      localStorage.setItem('Todos', JSON.stringify(Todos));
    }
  }
  getToDoByName(Name) {
    const Todos = JSON.parse(localStorage.getItem('Todos'));
    if (Todos == null) {
      return null;
    } else {
      return Todos.filter(todo => todo.Name === Name);
    }
  }
  EditTodo(Name, EditValue) {
    const Todos = JSON.parse(localStorage.getItem('Todos'));
    Todos.forEach(element => {
      if (element.Name === Name) {
        element.Name = EditValue.Name;
        element.done = EditValue.done;
      }
    });
    console.log(Todos);
    localStorage.setItem('Todos', JSON.stringify(Todos));
    this.router.navigateByUrl('/Todo/' + EditValue.Name);
  }
}
