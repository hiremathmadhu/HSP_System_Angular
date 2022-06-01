import { Component, OnInit } from '@angular/core';
import { ServiceCategory } from 'src/app/Models/service-category';
import { ServiceCategorySerivce } from 'src/app/Services/service-category.service';

@Component({
  selector: 'app-viewallservicecategory',
  templateUrl: './viewallservicecategory.component.html',
  styleUrls: ['./viewallservicecategory.component.css']
})
export class ViewallservicecategoryComponent implements OnInit {
servicecategorys:ServiceCategory[];
  constructor(private serviceCategoryservice:ServiceCategorySerivce) {
    this.serviceCategoryservice.GetAllServiceCategory().subscribe(data=>{
      this.servicecategorys=data;
      console.log(this.servicecategorys);
    })
   }

  ngOnInit(): void {
  }
  DeleteServiceCategory(id:number)
  {
    this.serviceCategoryservice.DeleteServiceCategory(id).subscribe(data=>{
      console.log(data);
    })
  }
}
