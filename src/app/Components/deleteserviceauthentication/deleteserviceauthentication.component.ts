import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthentication } from 'src/app/Models/service-authentication';
import { ServiceAuthenticationService } from 'src/app/Services/service-authentication.service';

@Component({
  selector: 'app-deleteserviceauthentication',
  templateUrl: './deleteserviceauthentication.component.html',
  styleUrls: ['./deleteserviceauthentication.component.css']
})
export class DeleteserviceauthenticationComponent implements OnInit {
item:ServiceAuthentication
  constructor(private serviceauthenticationService:ServiceAuthenticationService,private router:Router) {
    this.item=new ServiceAuthentication();
   }

  ngOnInit(): void {
  }
  Delete(){
    this.serviceauthenticationService.DeleteServiceAuthentication(this.item.serviceid).subscribe(data=>
      {
        console.log(data);
      })
      this.router.navigateByUrl('view-all');
  }

}
