import { Component, OnInit } from '@angular/core';
import { ServiceOwner } from 'src/app/Models/service-owner';
import { ServiceOwnerSerivce } from 'src/app/Services/service-owner.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addservicecategory',
  templateUrl: './addserviceowner.component.html',
  styleUrls: ['./addserviceowner.component.css']
})
export class AddserviceownerComponent implements OnInit {
item:ServiceOwner
  constructor(private serviceownerService:ServiceOwnerSerivce,private router:Router) { 
this.item=new ServiceOwner;
  }

  ngOnInit(): void {
  }
  Save()
  {
    
    this.serviceownerService.AddServiceOwner(this.item).subscribe(data=>{    
        console.log(data);
        this.router.navigateByUrl('viewall');
      })
}
}