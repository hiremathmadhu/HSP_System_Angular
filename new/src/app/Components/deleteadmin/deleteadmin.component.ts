import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Models/admin';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-deleteadmin',
  templateUrl: './deleteadmin.component.html',
  styleUrls: ['./deleteadmin.component.css']
})
export class DeleteadminComponent implements OnInit {
item:Admin
  constructor(private adminService:AdminService, private router:Router) {
    this.item=new Admin();
   }

  ngOnInit(): void {
  }
  Delete()
  {
    this.adminService.Delete(this.item.adminusername).subscribe(data=>
      {
        console.log(data);
      })
      this.router.navigateByUrl('view-all');
   }
}
