import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }
//загрузка всех категорий
  public categories(){
    return this._http.get(`${baseUrl}/category/`);
  }

  //добавление новой категории
  public addCategory(category:any){
    return this._http.post(`${baseUrl}/category/`,category)
  }
}
