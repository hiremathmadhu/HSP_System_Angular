import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCategory } from 'src/app/Models/service-category';
import { ServiceCategorySerivce } from 'src/app/Services/service-category.service';

@Component({
  selector: 'app-editserviceCategory',
  templateUrl: './editserviceCategory.component.html',
  styleUrls: ['./editserviceCategory.component.css']
})
export class EditserviceCategoryComponent implements OnInit {
item:ServiceCategory
  constructor(private serviceCategoryService:ServiceCategorySerivce,private router:Router) {
    this.item = new ServiceCategory();
   }

  ngOnInit(): void {
  }
  Edit(){
    this.serviceCategoryService.EditServiceCategory(this.item).subscribe(data=>
      {
        console.log(data);
      })
      this.router.navigateByUrl('ViewAll');
  }

}