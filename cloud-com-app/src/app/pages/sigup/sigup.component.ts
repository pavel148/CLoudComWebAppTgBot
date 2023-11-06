import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {
constructor(private userService:UserService){}

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
        alert('User is required !!')
        return;
      }

      //

      this.userService.addUser(this.user).subscribe(
        (data)=>{
            console.log(data);
            alert('succes');
        },
        (error)=>{
          console.log(error);
          alert("something went wrong");
        }
      )
  }

  //this.user
}
