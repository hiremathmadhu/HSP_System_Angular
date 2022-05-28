import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCategory } from 'src/app/Models/service-category';
import { ServiceCategorySerivce } from 'src/app/Services/service-category.service';

@Component({
  selector: 'app-deleteservicecategory',
  templateUrl: './deleteservicecategory.component.html',
  styleUrls: ['./deleteservicecategory.component.css']
})
export class DeleteservicecategoryComponent implements OnInit {
item:ServiceCategory
  constructor(private serviceCategoryService:ServiceCategorySerivce,private router:Router) {
    this.item = new ServiceCategory();
   }

  ngOnInit(): void {
  }
  Delete(){
    this.serviceCategoryService.DeleteServiceCategory(this.item.serviceid).subscribe(data=>
      {
        console.log(data);
      })
      this.router.navigateByUrl('view-all');
  }

}