import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceOwner } from 'src/app/Models/service-owner';
import { ServiceOwnerSerivce } from 'src/app/Services/service-owner.service';

@Component({
  selector: 'app-deleteserviceowner',
  templateUrl: './deleteserviceowner.component.html',
  styleUrls: ['./deleteserviceowner.component.css']
})
export class DeleteserviceownerComponent implements OnInit {
item:ServiceOwner
  constructor(private serviceOwnerService:ServiceOwnerSerivce,private router:Router) { 
    this.item=new ServiceOwner();
  }

  ngOnInit(): void {
  }
  Delete(){
    this.serviceOwnerService.DeleteServiceOwner(this.item.id).subscribe(data=>
      {
        console.log(data);
      })
      this.router.navigateByUrl('view-all');
  }
}
