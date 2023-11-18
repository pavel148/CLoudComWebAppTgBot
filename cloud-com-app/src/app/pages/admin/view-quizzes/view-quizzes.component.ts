import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
declare var encodeURIComponent: (input: string) => string;

interface Quiz {
  qId: number;
  title: string;
  descriprion: string;
  maxMarks: string;
  numberOfQuestions: string;
  active: string;
  category: {
    title: string;
  };
}
@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  
  quizzes: Quiz[] = [];

  constructor(private _quiz:QuizService){

  }
  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error)=>{
        console.groupCollapsed(error);
        Swal.fire('Error', 'Ошибка в загрзке данных', 'error');
      }
    )
  }


  deleteQuiz(qId:any){
   
Swal.fire({
  icon:'info',
  title:'Вы уверены что хотите удалить тест?',
  confirmButtonText:'Удалить',
  showCancelButton:true,
  cancelButtonText:'Отменить',
}).then((result)=>{

  if(result.isConfirmed){
    //удаляем если нажата кнопка Удалить

    this._quiz
    .deleteQuiz(qId).
    subscribe(
      (data)=>{
        this.quizzes=this.quizzes.filter((quiz)=>quiz.qId!=qId);
        Swal.fire('Успех!','Тест успешно удален','success')
      },
      (error)=>{
        Swal.fire('Ошибка','Ошибка при удалении теста','error');
      });
  }
})



  }
}
