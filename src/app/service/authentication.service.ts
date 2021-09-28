import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
   
    if (username === "hemang" && password === "1234" 
    ||username === "afroz" && password === "1234" ) {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    let role = 'admin';
    let userRole= 'user';
if(user === 'afroz')
   sessionStorage.setItem('role',role)
   else
   sessionStorage.setItem('role',userRole)
    return !(user === null)
  }
isUserAdmin(){
  let adminRights = false;
  let role = sessionStorage.getItem('role')
  if(role === 'admin')
 return true
  else
 return false
}
  logOut() {
    sessionStorage.removeItem('username')
  }
}