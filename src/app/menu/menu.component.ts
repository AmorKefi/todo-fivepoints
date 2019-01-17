import { Component, OnInit } from '@angular/core';
import { AppstateService } from '../services/appstate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user = this.userservice.getConnected();
  connected = false;
  constructor(private userservice: AppstateService) { }

  ngOnInit() {
    if (this.user != null) {
      this.connected = true;
    }
  }
  logOut() {
    this.userservice.logout();
  }
}
