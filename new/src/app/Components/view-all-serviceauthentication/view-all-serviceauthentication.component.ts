import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentication } from 'src/app/Models/service-authentication';
import { ServiceAuthenticationService } from 'src/app/Services/service-authentication.service';

@Component({
  selector: 'app-view-all-serviceauthentication',
  templateUrl: './view-all-serviceauthentication.component.html',
  styleUrls: ['./view-all-serviceauthentication.component.css']
})
export class ViewAllServiceauthenticationComponent implements OnInit {
  item:ServiceAuthentication
  serviceauthentications:ServiceAuthentication[];
  constructor(private serviceauthenticationService:ServiceAuthenticationService, private router:Router) 
  {
    this.serviceauthenticationService.GetAllServiceAuthentications().subscribe(data=> {
    this.serviceauthentications=data;
    console.log(this.serviceauthentications);
  })
}
  ngOnInit(): void {
  }
  
}
