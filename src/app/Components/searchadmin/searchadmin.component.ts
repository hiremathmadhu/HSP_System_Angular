import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Models/admin';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-searchadmin',
  templateUrl: './searchadmin.component.html',
  styleUrls: ['./searchadmin.component.css']
})
export class SearchadminComponent implements OnInit {
item:Admin
  
constructor(private adminService:AdminService,private router:Router) {
  this.item = new Admin();
}

  ngOnInit(): void {
  }
  Search()
  {
    this.adminService.GetAdminUsername(this.item).subscribe(data=>{
      this.item=data;
      })
      this.router.navigateByUrl('ViewAll');
}
}
