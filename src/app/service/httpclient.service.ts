import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

export class Customer{
  constructor(
    public custid:string,
    public cname:string,
    public mail_id:string,
     public dob:string,
   public password:string
    // public customerID:string,
    // public customerNAME:string,
    // public customerDOB:string,
    //  public customerEMAIL:string,
    // // public customerACC:string,
    // // public customerDOO:string,
    // // public customerACCTYPE:string,
    // public customerPASS:string,
  ) {}
}
export class Amount{
  constructor(
   public acc_num:string,
     public  balance:number,
  ){}
}
export class Banking{
  constructor(
    public AccountNum:string,
    public TransactionNum:string,
    public DOTransaction:string,
    public Amount:string,
  ) {}
}
export class Accounts{
  constructor(
    public customerID:string,
    public AccountNum:string,
    public AccountType:string,
    public DOOpening:string,
    public Balance:string,
    public Status:string,
    ) {}
}

 export class User {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}
//@CrossOrigin(origins = "http://localhost:4200")
	
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  constructor(
    private httpClient:HttpClient
  ){
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
}
public get userValue(): User {
  return this.userSubject.value;
}
     getCustomers()
  {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log(headers);
    return this.httpClient.get<Customer[]>('http://localhost:9090/displayAll');
  }
  getAccounts()
  {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log(headers);
    return this.httpClient.get<Accounts[]>('http://localhost:2222/displayAccounts');
  }
  getBanking()
  {
    let basicString=this.getHeaders();

    let headers=new HttpHeaders(
      {Authorization:basicString}
    );
    console.log(headers);
    return this.httpClient.get<Banking[]>('http://localhost:9091/displayBanking');
  }
  
  
  public createAccount(account) {
    console.log(account);
    console.log(Customer);
    let user = sessionStorage.getItem("username");
    return this.httpClient.put<Customer>(`http://localhost:9090/customers/123`, account);
  }
//this.httpClient.post<Customer>("http://localhost:4444/displayAccounts");
//this.httpClient.post<Customer>("http://localhost:4444/displayAccount");
//this.httpClient.post<Customer>("http://localhost:4444/displayBanking");
//displayAll

getHeaders(){
  let username='admin'
  let password='password'

  let  basicString='Basic '+window.btoa(username + ':' + password)
  return basicString;
}
login(username, password) {
  return this.httpClient.get<User>("http://localhost:9090/validate"+"?custId="+username+"&password="+password)
      .pipe(map(user => {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
      }));
} 
withdraw(amount) {
  console.log(amount);
  return this.httpClient.put<Amount>(`http://localhost:2222/withdraw/${amount.acc_num}/${amount.balance}`,amount);
}
deposit(amount){
  return this.httpClient.put<Amount>(`http://localhost:2222/deposit/${amount.acc_num}/${amount.balance}`,amount);

}
logout() {
  localStorage.removeItem('user');
}
}