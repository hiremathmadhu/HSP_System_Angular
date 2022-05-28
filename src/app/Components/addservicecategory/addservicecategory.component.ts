import { Component, OnInit } from '@angular/core';
import { ServiceCategory } from 'src/app/Models/service-category';
import { ServiceCategorySerivce } from 'src/app/Services/service-category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addservicecategory',
  templateUrl: './addservicecategory.component.html',
  styleUrls: ['./addservicecategory.component.css']
})
export class AddservicecategoryComponent implements OnInit {
item:ServiceCategory
  constructor(private servicecategoryService:ServiceCategorySerivce,private router:Router) { 
this.item=new ServiceCategory;
  }

  ngOnInit(): void {
  }
  Save()
  {
    
    this.servicecategoryService.AddServiceCategory(this.item).subscribe(data=>{    
        console.log(data);
        this.router.navigateByUrl('viewall');
      })
}
}
