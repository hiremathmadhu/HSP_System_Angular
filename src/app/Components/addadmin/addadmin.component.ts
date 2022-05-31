import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Models/admin';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddAdminComponent implements OnInit {
item :Admin
  constructor(private adminService:AdminService, private router:Router) {
this.item=new Admin;
   }

  ngOnInit(): void {
  }
Save()
{
  
  this.adminService.AddAdmin(this.item).subscribe(data=>{    
      console.log(data);
      this.router.navigateByUrl('viewall');
    })
}
}
