import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

interface Question {
  quesId: number;
  content: string;
  image?: string | null;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})

export class ViewQuizQuestionsComponent implements OnInit {

  qId:any;
  qTitle:any;
  questions=[  {
    "quesId": 1,
    "content": "",
    "image": "",
    "option1": "",
    "option2": "",
    "option3": "",
    "option4": "",
    "answer": ""
  },
  // {
  //   "quesId": 2,
  //   "content": "Which programming language is known for its flexibility and versatility?",
  //   "image": null,
  //   "option1": "Java",
  //   "option2": "Python",
  //   "option3": "C++",
  //   "option4": "JavaScript",
  //   "answer": "Python"
  // },
  // {
  //   "quesId": 3,
  //   "content": "Who wrote 'Romeo and Juliet'?",
  //   "image": null,
  //   "option1": "Charles Dickens",
  //   "option2": "Jane Austen",
  //   "option3": "William Shakespeare",
  //   "option4": "Homer",
  //   "answer": "William Shakespeare"
  // },
  // {
  //   "quesId": 4,
  //   "content": "What is the square root of 64?",
  //   "image": null,
  //   "option1": "6",
  //   "option2": "7",
  //   "option3": "8",
  //   "option4": "9",
  //   "answer": "8"
  // }
]
  i: number = 0;
constructor(private _route:ActivatedRoute,
  private _question:QuestionService,
  private _snak:MatSnackBar,
){

}
  ngOnInit(): void {
   
    this.qId= this._route.snapshot.params['qid'];
    console.log(this.qId);
    this.qTitle = this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data:any)=>{
        this.questions=data;
        console.log(this.questions)
    }, (error)=>{

    })
  }
  deleteQuestion(qid:any){
Swal.fire({
  icon:'info',
  showCancelButton: true,
  cancelButtonText:'Отменить',
  confirmButtonText:'Удалить',
  title:'Вы уверены что хотите удалить вопрос?'
}).then((result)=>{
  if(result.isConfirmed){
    this._question.deleteQuestion(qid).subscribe(
      (data)=>{
          this._snak.open('Вопрос удален','',{
            duration:3000,
          });
          this.questions=this.questions.filter((q)=>q.quesId!=qid)
      },
      (error)=>{
        this._snak.open('Ошибка при удалении вопроса','',{
          duration:3000,
        });
        console.log(error);
      }
    );
  }
});
  }

}
