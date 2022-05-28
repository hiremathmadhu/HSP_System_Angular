import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ServiceBooking } from '../Models/service-booking';
@Injectable({
  providedIn: 'root'
})
export class ServiceBookingSerivce {
api_path:string='https://localhost:44396/api/ServiceBooking';
  constructor(private http:HttpClient) { }

GetAllServiceBookings():Observable<ServiceBooking[]>
{
return this.http.get<ServiceBooking[]>(this.api_path+'/GetAllServiceBookings');
}
GetServiceBookingById(id:number):Observable<ServiceBooking>
{
return this.http.get<ServiceBooking>(this.api_path+'/GetServiceBookingById/'+id);
}
AddServiceBooking(item:ServiceBooking):Observable<any>
{
return this.http.post(this.api_path+'/AddServiceBooking',item);
}
EditServiceBooking(item:ServiceBooking):Observable<any>
{
  return this.http.put(this.api_path+'/EditServiceBooking',item);
}
DeleteServiceBooking(id:number):Observable<any>
{
  return this.http.delete(this.api_path+'/DeleteServiceBooking/'+id);
}
}
