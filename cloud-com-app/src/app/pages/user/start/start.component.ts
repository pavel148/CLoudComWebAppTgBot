import { LocationStrategy } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { MatList } from '@angular/material/list';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{

  qid:any;
  questions:any;
  marksGot=0;
  correctAnswer=0;
  attempted=0;
  isSubmit: boolean | undefined;
  timer:any;

  constructor(
    private locationSt:LocationStrategy,
    private _route:ActivatedRoute,
    private _question: QuestionService,
  ){}
//предотвращаем переход назад при начатом тесте
  ngOnInit(): void {
    this.preventBackButton();
    this.qid= this._route.snapshot.params['qid'];
    this.loadQuestions();
  }
  loadQuestions() {
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe(
      (data: any) => {
        this.questions = data;

        this.timer=this.questions.length*2*60;

        // this.questions.forEach((q:any) => {
        //   q['givenAnswer']='';
        // });
        console.log(this.questions);

        this.startTimer();

  
      },
      (error) => {
        console.log(error);
        Swal.fire("Ошибка", "Ошибка при загрузик данных с сервера", "error");
      }
    );
  }
 

  preventBackButton(){
    history.pushState(null,'', location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null, '', location.href)
    })
  }

  submitQuiz(){
    Swal.fire({
      title: "Уверены что хотите закончить тестирование?",
      showCancelButton: true,
      cancelButtonText: "Отменить",
      confirmButtonText: "Закочнить",
      icon:'info',
    }).then((e)=>{
      if(e.isConfirmed){
        this.evalQuiz();
         
      }
    });
  }


  startTimer(){
    let t= window.setInterval(()=>{


      if(this.timer<=0){
        this.evalQuiz()
        clearInterval(t)
      } else{
        this.timer--;

      }
    },1000)
  }

  getFormattedTime(){
    let mm= Math.floor(this.timer/60);
    let ss=this.timer-mm*60;
    return `${mm} минуты : ${ss} секунды`;
  }

  evalQuiz(){

    //ПРОВЕРКА БАЛЛОВ ВЕДЕТЬСЯ НА  СТОРОНЕ СЕРВЕРА
  //   this.isSubmit=true;
    this._question.evalQuiz(this.questions).subscribe(
      (data:any)=>{
        console.log(data);
        this.marksGot=parseFloat(Number(data.marksGot).toFixed(2));
        this.correctAnswer=data.correctAnswer;
        this.attempted=data.attempted;
        this.isSubmit=true;
      },
      (error)=>{
        console.log(error)
      }
    )
  //   //подсчет баллов
  // this.questions.forEach((q:any)=>{
  //   console.log(q.givenAnswer+'/'+q.answer)
  //   if (q.givenAnswer==q.answer){
  //     this.correctAnswer++;
  //     let marksSingle=this.questions[0].quiz.maxMarks / this.questions.length;
     
  //     this.marksGot+=marksSingle;
  //   }
  //   if(q.givenAnswer.trim()!=''){
  //     this.attempted++;
  //   }
  // })

  }

  printPage(){
    window.print();
    console.log("");
  }
}
