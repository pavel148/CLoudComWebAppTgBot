import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper'
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public quizzes(){
    return this._http.get(`${baseUrl}/quiz/`)
  }


  public addQuiz(quiz:any){
    return this._http.post(`${baseUrl}/quiz/`, quiz);
  }


  //удаление теста
  public deleteQuiz(qId:any){
    return this._http.delete(`${baseUrl}/quiz/${qId}`)
  }


  //получить текущий тест
  public getQuiz(qId:any){
    return this._http.get(`${baseUrl}/quiz/${qId}`);
  }
   

  //обновить тест
  public updateQuiz(quiz:any){
    return this._http.put(`${baseUrl}/quiz/`,quiz);
  }

//получение теста по категориям

public getQuizzesOfCategory(cid:any){
  return this._http.get(`${baseUrl}/quiz/category/${cid}`);
}

//получить активные тесты

public getActiveQuizzes(){
  return this._http.get(`${baseUrl}/quiz/active`);
}

//получить активные тесты по категориям

public getActiveQuizzesOfCategory(cid:any){
  return this._http.get(`${baseUrl}/quiz/category/active/${cid}`);
}

}
