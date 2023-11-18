import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit{

 


  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService,
    private _cat:CategoryService,
    private _router:Router){

  }
  categories: any[] = [];  
  qId=0;
  quiz:any

  ngOnInit(): void {
   this.qId=  this._route.snapshot.params['qid'];


   this._quiz.getQuiz(this.qId).subscribe(
    (data:any)=>{
      this.quiz=data;
      console.log( this.quiz)
    },
    (error)=>{
      console.log(error);
    }
   )
   this._cat.categories().subscribe((data:any)=>{
    this.categories=data;
   }, (error)=>{
    alert("Ошибка в загрузки категории")
   });
   
  }

//обновление form submit
public updateData(){
//валиадация 


this._quiz.updateQuiz(this.quiz).subscribe((data)=>{
  Swal.fire('Успех !!', 'тест обновлен','success').then((e)=>{
       this._router.navigate(['/admin/quizzes'])
  });
},
(error)=>{
    Swal.fire('Ошибка','ошибка в обновлении теста','error');
    console.log(error);
})
}

}
