import { Component, OnInit } from '@angular/core';
import { ServiceOwner } from 'src/app/Models/service-owner';
import { ServiceOwnerSerivce } from 'src/app/Services/service-owner.service';

@Component({
  selector: 'app-view-all-serviceowner',
  templateUrl: './view-all-serviceowner.component.html',
  styleUrls: ['./view-all-serviceowner.component.css']
})
export class ViewAllServiceownerComponent implements OnInit {
serviceowners:ServiceOwner[];
  constructor(private  serviceOwnerservice:ServiceOwnerSerivce) {
this.serviceOwnerservice.GetAllServiceOwners().subscribe(data=>{
  this.serviceowners=data;
  console.log(this.serviceowners);
})
   }

  ngOnInit(): void {
  }
DeleteServiceOwner(id:number){
  this.serviceOwnerservice.DeleteServiceOwner(id).subscribe(data=>{
    console.log(data);
  })
}
}
