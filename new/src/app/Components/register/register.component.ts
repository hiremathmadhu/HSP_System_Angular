import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Name: string;
  Password: string;
  EmailAddress: string;

  constructor(private router:Router) {
    Name:String;
    Password:String;
    EmailAddress:String
   }

  ngOnInit(): void {
  }
Rgister(){
  if(this.Name== 'admin' && this.Password=='admin' && this.EmailAddress=='admin'){ 
    console.log("hi.Welcome");
    this.router.navigate["user"]}
    else{
      alert("Registered successfully");
    }
}
}
