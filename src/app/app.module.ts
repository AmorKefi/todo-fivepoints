import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppstateService } from './services/appstate.service';
import { EditComponent } from './home/edit/edit.component';
import { TodoComponent } from './home/todo/todo.component';
import { AppCurrencyComponent } from './app-currency/app-currency.component';
import { CurrencyService } from './services/currency.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    TodoComponent,
    EditComponent,
    AppCurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppstateService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
