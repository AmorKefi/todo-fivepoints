import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { TodoComponent } from './home/todo/todo.component';
import { EditComponent } from './home/edit/edit.component';

const routes: Routes = [
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'Register', component: RegisterComponent
  },
  {
    path: 'Home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'Todo/:Name', component: TodoComponent
  },
  {
    path: 'Edit/:Name', component: EditComponent
  },
  {
    path: '**', redirectTo: 'Login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
