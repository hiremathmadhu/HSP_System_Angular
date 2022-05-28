import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentication } from 'src/app/Models/service-authentication';
import { ServiceAuthenticationService } from 'src/app/Services/service-authentication.service';

@Component({
  selector: 'app-addserviceauthentication',
  templateUrl: './addserviceauthentication.component.html',
  styleUrls: ['./addserviceauthentication.component.css']
})
export class AddserviceauthenticationComponent implements OnInit {
item:ServiceAuthentication
  constructor(private serviceauthenticationService:ServiceAuthenticationService,private router:Router) {
   this.item = new ServiceAuthentication;
   }

  ngOnInit(): void {
  }
Save(){
  this.serviceauthenticationService.AddServiceAuthentication(this.item).subscribe(data=>{
    console.log(data);
    this.router.navigateByUrl('viewall');
  })
}
}
