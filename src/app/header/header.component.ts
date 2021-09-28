import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:AuthenticationService){ }
  ngOnInit() {
    let adminRights = false;
    let role = sessionStorage.getItem('role')
    if(role === 'admin')
    adminRights = true;
    else
    adminRights = false;
    console.log(adminRights);
    console.log(this.loginService)
  }

}
