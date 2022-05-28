import { Component, OnInit } from '@angular/core';
import { ServiceAuthentication } from 'src/app/Models/service-authentication';
import { ServiceAuthenticationService } from 'src/app/Services/service-authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchserviceauthetication',
  templateUrl: './searchserviceauthetication.component.html',
  styleUrls: ['./searchserviceauthetication.component.css']
})
export class SearchserviceautheticationComponent implements OnInit {
item:ServiceAuthentication
  constructor(private serviceauthenticationservice:ServiceAuthenticationService, private router:Router) {
    this.item=new ServiceAuthentication()
   }

  ngOnInit(): void {
  }
  Search()
  {
    this.serviceauthenticationservice.GetServiceAutheticationByName(this.item.serviceauthusername).subscribe(data=>{
      this.item=data;
      })
      this.router.navigateByUrl('ViewAll');
}
}
