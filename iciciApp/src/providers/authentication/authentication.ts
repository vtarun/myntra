// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

  constructor() {
    console.log('Hello AuthenticationProvider Provider');
  }
  getUsername(): string {
    return localStorage.getItem('email');
  }
  hasLogin(): boolean {
    return localStorage.getItem('email') ? true : false;
  }
  setusername(user: string): void {
    localStorage.setItem("email", user);
  }
  removeUsername(): void{
    localStorage.removeItem('email');
  }
  // validateUser(user: string, password: string): any {
  //   this.http.post('user/validate',{'username': user, 'password': password}, {}).subscribe((data) => {
  //     return true;
  //   },
  //     (err) => {
  //       console.log('got error', err);
  //       return false;
  //     }
  //   );
  // }

}
