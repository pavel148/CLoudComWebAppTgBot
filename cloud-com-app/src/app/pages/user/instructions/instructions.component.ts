import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {


  qid:any;
  quiz:any;
  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService

  ){}
  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qid).subscribe(
      (data:any)=>{
        console.log(data);
      
        this.quiz=data;
        console.log(this.quiz.title);
      },
      (error)=>{
        console.log(error);
        alert("Ошибка получения дданных с сервера");
      }
    )
  }

}
