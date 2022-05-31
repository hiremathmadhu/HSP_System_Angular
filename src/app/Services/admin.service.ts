import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Admin } from '../Models/admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
Delete(adminusername: string) {
  return this.http.delete(this.api_path+'/DeleteAdmin/'+adminusername);
}
api_path:string='https://localhost:44396/api/Admin';
 
constructor(private http:HttpClient) { }

GetAllAdmin():Observable<Admin[]>
{
return this.http.get<Admin[]>(this.api_path+'/GetAllAdmin');
}
GetAdminUsername(item:Admin):Observable<Admin>
{
return this.http.get<Admin>(this.api_path+'/GetAdminUsername');
}
AddAdmin(item:Admin):Observable<any>
{
return this.http.post(this.api_path+'/AddAdmin',item);
}
EditAdmin(item:Admin):Observable<any>
{
  return this.http.put(this.api_path+'/EditAdmin',item);
}
DeleteAdmin(username:string):Observable<any>
{
  return this.http.delete(this.api_path+'/DeleteAdmin/'+username);
}
}
