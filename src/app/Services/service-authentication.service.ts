import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ServiceAuthentication } from '../Models/service-authentication';
@Injectable({
  providedIn: 'root'
})
export class ServiceAuthenticationService {
api_path:string='https://localhost:44396/api/ServiceAuthentication';
  constructor(private http:HttpClient) { }

GetAllServiceAuthentications():Observable<ServiceAuthentication[]>
{
return this.http.get<ServiceAuthentication[]>(this.api_path+'/GetAllServiceAthentications');
}
GetServiceAutheticationByName(name:string):Observable<ServiceAuthentication>
{
return this.http.get<ServiceAuthentication>(this.api_path+'/GetServiceAutheticationByName/'+name);
}
AddServiceAuthentication(item:ServiceAuthentication):Observable<any>
{
return this.http.post(this.api_path+'/AddServiceAuthentication',item);
}
EditServiceAuthentication(item:ServiceAuthentication):Observable<any>
{
  return this.http.put(this.api_path+'/EditServiceAuthentication',item);
}
DeleteServiceAuthentication(id:number):Observable<any>
{
  return this.http.delete(this.api_path+'/DeleteServiceAuthentication/'+id);
}
}
