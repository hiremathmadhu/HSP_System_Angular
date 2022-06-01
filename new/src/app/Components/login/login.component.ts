import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username: string;
  Password: string;

  constructor(private router:Router) {
    Username:String;
    Password:String;

   }

  ngOnInit(): void {
  }
  Login(){
    {
      if(this.Username== 'admin' && this.Password=='admin'){ 
        console.log("hi.Welcome");
        this.router.navigate["user"]}
        else{
          alert("Invalid credentials");
        }
    }
  }

}
