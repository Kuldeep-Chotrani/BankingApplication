import { Component, OnInit } from '@angular/core';
import { HttpClientService, Customer } from '../service/httpclient.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  user: Customer = new Customer("","","","","");

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createAccount(): void {
    console.log(this.user);
    this.httpClientService.createAccount(this.user)
        .subscribe( data => {
          alert("Account created successfully.");
        });

  };

}