import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }

  public getQuestionsOfQuiz(qid:any){
      return this._http.get( `${baseUrl}/question/quiz/all/${qid}`)
  }


public addQuestion(question:any){
 return this._http.post(`${baseUrl}/question/`,question);
}

//Удаление вопроса

public deleteQuestion(questionId:any){
  return this._http.delete(`${baseUrl}/question/${questionId}`);
}

}
