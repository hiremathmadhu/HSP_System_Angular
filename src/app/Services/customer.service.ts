import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Customer } from '../Models/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
api_path:string='https://localhost:44396/api/Customer';
 
constructor(private http:HttpClient) { }

GetAllCustomers():Observable<Customer[]>
{
return this.http.get<Customer[]>(this.api_path+'/GetAllCustomers');
}
GetCustomerById(id:number):Observable<Customer>
{
return this.http.get<Customer>(this.api_path+'/GetCustomerById/'+id);
}
AddCustomer(item:Customer):Observable<any>
{
return this.http.post(this.api_path+'/AddCustomer',item);
}
EditCustomer(item:Customer):Observable<any>
{
  return this.http.put(this.api_path+'/EditCustomer',item);
}
DeleteCustomer(id:number):Observable<any>
{
  return this.http.delete(this.api_path+'/DeleteCustomer/'+id);
}
}
