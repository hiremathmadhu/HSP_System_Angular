import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './Services/customer.service';
import { ServiceAuthenticationService } from './Services/service-authentication.service';
import { ServiceBookingSerivce } from './Services/service-booking.service';
import { ServiceCategorySerivce } from './Services/service-category.service';
import { ServiceOwnerSerivce } from './Services/service-owner.service';
import { ViewAllComponent } from './Components/view-all/view-all.component';
import { AddcustomerComponent } from './Components/addcustomer/addcustomer.component';
import { DeletecustomerComponent } from './Components/deletecustomer/deletecustomer.component';
import { EditcustomerComponent } from './Components/editcustomer/editcustomer.component';
import { SearchcustomerComponent } from './Components/searchcustomer/searchcustomer.component';
import { ViewAllServiceauthenticationComponent } from './Components/view-all-serviceauthentication/view-all-serviceauthentication.component';
import { AddserviceauthenticationComponent } from './Components/addserviceauthentication/addserviceauthentication.component';
import { DeleteserviceauthenticationComponent } from './Components/deleteserviceauthentication/deleteserviceauthentication.component';
import { EditserviceauthenticationComponent } from './Components/editserviceauthentication/editserviceauthentication.component';
import { AddservicebookingComponent } from './Components/addservicebooking/addservicebooking.component';
import { DeleteservicebookingComponent } from './Components/deleteservicebooking/deleteservicebooking.component';
import { EditservicebookingComponent } from './Components/editservicebooking/editservicebooking.component';
import { SearchservicebookingComponent } from './Components/searchservicebooking/searchservicebooking.component';
import { ViewallservicebookingComponent } from './Components/viewallservicebooking/viewallservicebooking.component';
import { AddservicecategoryComponent } from './Components/addservicecategory/addservicecategory.component';
import { DeleteservicecategoryComponent } from './Components/deleteservicecategory/deleteservicecategory.component';
import { SearchservicecategoryComponent } from './Components/searchservicecategory/searchservicecategory.component';
import { ViewallservicecategoryComponent } from './Components/viewallservicecategory/viewallservicecategory.component';
import { AddserviceownerComponent } from './Components/addserviceowner/addserviceowner.component';
import { DeleteserviceownerComponent } from './Components/deleteserviceowner/deleteserviceowner.component';
import { SearchserviceownerComponent } from './Components/searchserviceowner/searchserviceowner.component';
import { ViewAllServiceownerComponent } from './Components/view-all-serviceowner/view-all-serviceowner.component';
import { EditserviceCategoryComponent } from './Components/editservicecategory/editservicecategory.component';
import { EditserviceOwnerComponent } from './Components/editserviceowner/editserviceowner.component';
import { SearchserviceautheticationComponent } from './Components/searchserviceauthetication/searchserviceauthetication.component';
import { AdminComponent } from './Models/admin/admin.component';
import { AddAdminComponent } from './Components/addadmin/addadmin.component';
import { DeleteadminComponent } from './Components/deleteadmin/deleteadmin.component';
import { EditadminComponent } from './Components/editadmin/editadmin.component';
import { SearchadminComponent } from './Components/searchadmin/searchadmin.component';
import { ViewalladminComponent } from './Components/viewalladmin/viewalladmin.component';
import { HomeComponent } from './Components/home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewAllComponent,
    AddcustomerComponent,
    DeletecustomerComponent,
    EditcustomerComponent,
    SearchcustomerComponent,
    ViewAllServiceauthenticationComponent,
    AddserviceauthenticationComponent,
    DeleteserviceauthenticationComponent,
    EditserviceauthenticationComponent,
    SearchserviceownerComponent,
    AddservicebookingComponent,
    DeleteservicebookingComponent,
    EditservicebookingComponent,
    SearchservicebookingComponent,
    ViewallservicebookingComponent,
    AddservicecategoryComponent,
    DeleteservicecategoryComponent,
    SearchservicecategoryComponent,
    ViewallservicecategoryComponent,
    AddserviceownerComponent,
    DeleteserviceownerComponent,
    SearchserviceownerComponent,
    ViewAllServiceownerComponent,
    EditserviceCategoryComponent,
    EditserviceOwnerComponent,
    SearchserviceautheticationComponent,
    AdminComponent,
    AddAdminComponent,
    DeleteadminComponent,
    EditadminComponent,
    SearchadminComponent,
    ViewalladminComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent}
    ]) 
  ],
  providers: [CustomerService,ServiceAuthenticationService,ServiceBookingSerivce,ServiceCategorySerivce,ServiceOwnerSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
