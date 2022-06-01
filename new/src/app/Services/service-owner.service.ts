import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ServiceOwner } from '../Models/service-owner';
@Injectable({
  providedIn: 'root'
})

export class ServiceOwnerSerivce {
  api_path:string='https://localhost:44396/api/ServiceOwner';
  constructor(private http:HttpClient) { }

  GetServiceOwnerById(id: number) {
    // throw new Error('Method not implemented.');
    return this.http.get<ServiceOwner>(this.api_path+'/GetOwnerById/'+id);
    }

GetAllServiceOwners():Observable<ServiceOwner[]>
{
return this.http.get<ServiceOwner[]>(this.api_path+'/GetAllServiceOwners');
}
GetOwnerById(id:number):Observable<ServiceOwner>
{
return this.http.get<ServiceOwner>(this.api_path+'/GetOwnerById/'+id);
}
AddServiceOwner(item:ServiceOwner):Observable<any>
{
return this.http.post(this.api_path+'/AddServiceOwner',item);
}
EditServiceOwner(item:ServiceOwner):Observable<any>
{
  return this.http.put(this.api_path+'/EditServiceOwner',item);
}
DeleteServiceOwner(id:number):Observable<any>
{
  return this.http.delete(this.api_path+'/DeleteServiceOwner/'+id);
}
}
