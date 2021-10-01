import { Component, OnInit } from '@angular/core';
import { Amount, HttpClientService } from '../service/httpclient.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  withdrawl = false;
  deposit = false;
  summary = false;
  withdrawlAmount = 0;
  customerID = '';
  user: Amount = new Amount("",0);
  openWithdraw(){
    this.withdrawl = true;
    this.deposit = false;
    this.summary = false;
  }
  openDeposit(){
    this.withdrawl =false ;
    this.deposit = true;
    this.summary = false;
  }
  openSummary(){
    this.summary = true;
    this.deposit = false;
    this.withdrawl = false;
  }
  constructor(private http: HttpClient, private httpClient:HttpClientService) { }

  ngOnInit() {
  }
  withDraw(): void {
      this.httpClient.withdraw(this.user)
          .subscribe( data => {
            alert("Amount withdrawl is successfull.");
            this.user.acc_num = "";
            this.user.balance = 0;
          });
  }
  depositAmount(): void {
    this.httpClient.deposit(this.user)
        .subscribe( data => {
          alert("Amount deposited");
        });
}
  handleSuccessfulResponse(response)
{
    console.log(response);
}
}
