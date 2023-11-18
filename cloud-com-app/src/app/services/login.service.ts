import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper'
import { Token } from '@angular/compiler';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

public loginStatusSubject=new Subject<boolean>();



  constructor(private http: HttpClient) { }

  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`)
  }

public generateToken(loginData:any){

  return this.http.post(`${baseUrl}/generate-token`,loginData);
}

//получение токена из localstorage
public loginUser(token:any){
  localStorage.setItem('token', token);
 
 return true;
}
   

public isLoggedIn(){
  let tokenStr=localStorage.getItem('token')
  if(tokenStr==undefined||tokenStr==''||tokenStr==null)
  {
    return false;
  }  else{
    return true;
  }
}


//удаление token из localStorage
public logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
}

//получениие token
public getToken(){
  return localStorage.getItem('token');
}


public setUser(user:any){
  localStorage.setItem('user',JSON.stringify(user));
   console.log('User stored in localStorage:', user);
}

public getUser(){
  let userStr=localStorage.getItem('user');
  if(userStr!=null){
    return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }
}

//Получение Роли пользователя - ADMIN or STUDENT
public getUserRole() {
  let user = this.getUser();
  if (user && user.authorities && user.authorities.length > 0) {
    return user.authorities[0].authority;
  } else {
    // Handle the case when authorities are null or empty
    console.log(user.authorities[0].authority);
    return ""; // Replace with a default role or handle accordingly
  }
}

}
