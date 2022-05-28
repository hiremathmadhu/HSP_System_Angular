import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCategory } from 'src/app/Models/service-category';
import { ServiceCategorySerivce } from 'src/app/Services/service-category.service';

@Component({
  selector: 'app-searchservicecategory',
  templateUrl: './searchservicecategory.component.html',
  styleUrls: ['./searchservicecategory.component.css']
})
export class SearchservicecategoryComponent implements OnInit {
  item: ServiceCategory;
  constructor(private serviceCategoryService:ServiceCategorySerivce,private router:Router) {
    this.item = new ServiceCategory();
   }

  ngOnInit(): void {
  }
  Search()
  {
    this.serviceCategoryService.GetServiceCategoryById(this.item.serviceid).subscribe(data=>{
      this.item=data;
      })
      this.router.navigateByUrl('ViewAll');
}
}
