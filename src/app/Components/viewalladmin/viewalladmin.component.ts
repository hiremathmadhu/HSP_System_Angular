import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Models/admin';
import { AdminService } from 'src/app/Services/admin.service';


@Component({
  selector: 'app-viewallAdmin',
  templateUrl: './viewalladmin.component.html',
  styleUrls: ['./viewalladmin.component.css']
})
export class ViewalladminComponent implements OnInit {
Admin:Admin[];
  constructor(private adminservice:AdminService, private router:Router) { 
    this.adminservice.GetAllAdmin().subscribe(data=>{
      this.Admin=data;
      console.log(this.Admin);
    })

  }

  ngOnInit(): void {
  }
  DeleteAdmin(username:string)   
  {
    this.adminservice.DeleteAdmin(username).subscribe(data=>{
      console.log(data);
    })
  }
}