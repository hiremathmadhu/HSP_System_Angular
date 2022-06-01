import { Component, OnInit } from '@angular/core';
import { ServiceAuthentication } from 'src/app/Models/service-authentication';  
import { ServiceAuthenticationService } from 'src/app/Services/service-authentication.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-editserviceauthentication',
  templateUrl: './editserviceauthentication.component.html',
  styleUrls: ['./editserviceauthentication.component.css']
})
export class EditserviceauthenticationComponent implements OnInit {
item:ServiceAuthentication
  constructor(private serviceAuthenticationService:ServiceAuthenticationService,private router:Router) {
    this.item=new ServiceAuthentication();
   }

  ngOnInit(): void {
  }
  Edit()
  {
    this.serviceAuthenticationService.EditServiceAuthentication(this.item).subscribe(data=>
      {
        console.log(data);
      })
      this.router.navigateByUrl('ViewAll');
  }
}
