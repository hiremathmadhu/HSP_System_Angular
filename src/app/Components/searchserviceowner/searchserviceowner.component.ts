import { Component, OnInit } from '@angular/core';
import { ServiceOwnerSerivce } from 'src/app/Services/service-owner.service';
import { ServiceOwner } from 'src/app/Models/service-owner';
import { Router } from '@angular/router';
@Component({
  selector: 'app-searchserviceowner',
  templateUrl: './searchserviceowner.component.html',
  styleUrls: ['./searchserviceowner.component.css']
})
export class SearchserviceownerComponent implements OnInit {
  item:ServiceOwner
  constructor(private serviceOwnerService:ServiceOwnerSerivce,private router:Router) {
    this.item = new ServiceOwner();
  }

  ngOnInit(): void {
  }
Search(){
  this.serviceOwnerService.GetServiceOwnerById(this.item.id).subscribe(data=>{
    this.item=data;
    })
    this.router.navigateByUrl('ViewAll');
}
}
