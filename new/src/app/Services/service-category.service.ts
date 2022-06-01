import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ServiceCategory } from '../Models/service-category';
@Injectable({
  providedIn: 'root'
})
export class ServiceCategorySerivce {
api_path:string='https://localhost:44396/api/Servicecategory';
  constructor(private http:HttpClient) { }

GetAllServiceCategory():Observable<ServiceCategory[]>
{
return this.http.get<ServiceCategory[]>(this.api_path+'/GetAllServiceCategories');
}
GetServiceCategoryById(id:number):Observable<ServiceCategory>
{
return this.http.get<ServiceCategory>(this.api_path+'/GetServiceCategoryById/'+id);
}
AddServiceCategory(item:ServiceCategory):Observable<any>
{
return this.http.post(this.api_path+'/AddServiceCategory',item);
}
EditServiceCategory(item:ServiceCategory):Observable<any>
{
  return this.http.put(this.api_path+'/EditServiceCategory',item);
}
DeleteServiceCategory(id:number):Observable<any>
{
  return this.http.delete(this.api_path+'/DeleteServiceCategory/'+id);
}
}
