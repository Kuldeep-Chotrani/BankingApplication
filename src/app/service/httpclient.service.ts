import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Customer{
  constructor(
    public customerID:string,
    public customerNAME:string,
    public customerDOB:string,
    public customerEMAIL:string,
    public customerACC:string,
    public customerDOO:string,
    public customerACCTYPE:string,
    public customerPASS:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }
     getAccount()
  {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log("test call");
    return this.httpClient.get<Customer[]>('http://localhost:8080/account',{headers});
  }

  public deleteEmployee(account) {
    return this.httpClient.delete<Customer>("http://localhost:8080/account" + "/"+ account.empId);
  }

  public createAccount(account) {
    return this.httpClient.post<Customer>("http://localhost:8080/account", account);
  }



getHeaders(){
  let username='admin'
  let password='password'

  let  basicString='Basic '+window.btoa(username + ':' + password)
  return basicString;
}

}