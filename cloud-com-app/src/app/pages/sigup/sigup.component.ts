import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {UserService} from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {
constructor(private userService:UserService, private snack: MatSnackBar){}

public user={
  username:'',
  password:'',
  firstName:'',
  lastName:'',
  email:'',
  phone:'',

}
ngOnInit():void{}

  formSubmit(){
      console.log(this.user);
      if(this.user.username==''|| this.user.username==null){

        this.snack.open('Требуеться указать Логин ', '',{
          duration:3000,
          verticalPosition:'top',
          horizontalPosition: 'right',
        });
        return;
      }
//валидация 
      //

      this.userService.addUser(this.user).subscribe(
        (data: any)=>{
            console.log(data);
            Swal.fire('Успешно','пользователь зарегистрирован' + data.id, 'success');
        },
        (error)=>{
          console.log(error);
          
          this.snack.open('Упс.похоже что-то пошло не так( ','',{
            duration:3000,
          })
        }
      )
  }

  //this.user
}
