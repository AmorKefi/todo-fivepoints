import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppstateService implements OnInit {
  Usersdb = localStorage.getItem('Users');
  Connected = localStorage.getItem('Conected');
  EntryPoint = 'http://chehir.tn:3000/';
  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit() {
    if (this.Usersdb == null) {
      localStorage.setItem('Users', '');
      this.Usersdb = localStorage.getItem('Users');
    }
  }
  getUserById(ID) {
    return this.http.get(`${this.EntryPoint}omar/user/${JSON.parse(ID)}`);
  }
  login(userCredential) {
    // let users: Array<any> = [];
    // if (this.Usersdb == null) {
    //   return false;
    // } else {
    //   users = JSON.parse(localStorage.getItem('Users'));
    //   const find = users.find(user => (userCredential.Username === user.Username));
    //   if (find != null) {
    //     if (find.Password === userCredential.Password) {
    //       const Connected = users.filter(user => userCredential.Username === user.Username);
    //       localStorage.setItem('Conected', JSON.stringify(Connected));

    //       this.router.navigateByUrl('/Home');
    //       location.reload(true);
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   } else {
    //     return false;
    //   }
    // }
    return this.http.post(`${this.EntryPoint}omar/login`, userCredential);
  }
  Register(user) {
    // let users: Array<any> = [];
    // if (this.Usersdb === null) {
    //   users.push(user);
    //   localStorage.setItem('Users', JSON.stringify(users));
    //   this.Usersdb = localStorage.getItem('Users');
    //   localStorage.setItem('Conected', JSON.stringify(users));
    //   this.router.navigateByUrl('/Home');
    // } else {
    //   users = JSON.parse(this.Usersdb);
    //   users.push(user);
    //   localStorage.setItem('Users', JSON.stringify(users));
    //   this.Usersdb = localStorage.getItem('Users');
    //   const Connected: Array<any> = [];
    //   Connected.push(user);
    //   localStorage.setItem('Conected', JSON.stringify(Connected));
    //   location.reload(true);
    //   this.router.navigateByUrl('/Home');
    // }
    return this.http.post(`${this.EntryPoint}omar/register`, user);
  }
  getConnected() {
    return JSON.parse(localStorage.getItem('Conected'));
  }
  logout() {
    localStorage.removeItem('User_ID');
    localStorage.removeItem('User_Info');
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
  updateUser(User) {
    return this.http.post(`${this.EntryPoint}/omar/user`, User);
  }
  getToDoByName(Name) {
    // const Todos = JSON.parse(localStorage.getItem('Todos'));
    // if (Todos == null) {
    //   return null;
    // } else {
    //   return Todos.filter(todo => todo.Name === Name);
    // }
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
