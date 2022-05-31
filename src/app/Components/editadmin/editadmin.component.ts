import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Models/admin';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.css']
})
export class EditadminComponent implements OnInit {
item:Admin
  constructor(private adminService:AdminService,private router:Router) { 
    this.item = new Admin();
  }

  ngOnInit(): void {
  }
  Edit()
  {
    this.adminService.EditAdmin(this.item).subscribe(data=>
      {
        console.log(data);
      })
      this.router.navigateByUrl('ViewAll');
  }
}
