import { Component, OnInit } from '@angular/core';
import { HttpClientService, Customer } from '../service/httpclient.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  account:Customer[];
    
   
  constructor(
    //private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    // this.httpClientService.getAccount().subscribe(
     // response =>this.handleSuccessfulResponse(response),
     //);
  }
/*
handleSuccessfulResponse(response)
{
    this.account=response;
}

deleteEmployee(employee:Customer): void {
   this.httpClientService.deleteEmployee(employee)
     .subscribe( data => {
      this.account = this.account.filter(u => u !== employee);
   })
};*/


}