import { Component, OnInit } from '@angular/core';
import { HttpClientService, Customer } from '../service/httpclient.service';
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  accounts:Customer[];
    customers= false;
    banking= false;
     account= false;

   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
  }
  openCustomers(){
    this.httpClientService.getCustomers().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
      this.customers= true;
      this.banking= false;
       this.account= false;
  }
  openAccounts(){
    this.httpClientService.getAccounts().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
      this.customers= false;
      this.banking= false;
       this.account= true;
  }
  openBanking(){
    this.httpClientService.getBanking().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
      this.customers= false;
      this.banking= true;
       this.account= false;
  }
handleSuccessfulResponse(response)
{
    this.accounts=response;
    console.log(this.accounts);
}
}
