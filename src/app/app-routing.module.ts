import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './Components/addcustomer/addcustomer.component';
import { AddserviceauthenticationComponent } from './Components/addserviceauthentication/addserviceauthentication.component';
import { AddservicebookingComponent } from './Components/addservicebooking/addservicebooking.component';
import { AddservicecategoryComponent } from './Components/addservicecategory/addservicecategory.component';
import { AddserviceownerComponent } from './Components/addserviceowner/addserviceowner.component';
import { DeletecustomerComponent } from './Components/deletecustomer/deletecustomer.component';
import { DeleteserviceauthenticationComponent } from './Components/deleteserviceauthentication/deleteserviceauthentication.component';
import { DeleteservicebookingComponent } from './Components/deleteservicebooking/deleteservicebooking.component';
import { DeleteservicecategoryComponent } from './Components/deleteservicecategory/deleteservicecategory.component';
import { DeleteserviceownerComponent } from './Components/deleteserviceowner/deleteserviceowner.component';
import { EditcustomerComponent } from './Components/editcustomer/editcustomer.component';
import { EditserviceauthenticationComponent } from './Components/editserviceauthentication/editserviceauthentication.component';
import { EditservicebookingComponent } from './Components/editservicebooking/editservicebooking.component';
import { EditserviceCategoryComponent } from './Components/editservicecategory/editservicecategory.component';
import { EditserviceOwnerComponent } from './Components/editserviceowner/editserviceowner.component';
import { SearchcustomerComponent } from './Components/searchcustomer/searchcustomer.component';
import { SearchserviceautheticationComponent } from './Components/searchserviceauthetication/searchserviceauthetication.component';
import { SearchservicebookingComponent } from './Components/searchservicebooking/searchservicebooking.component';
import { SearchservicecategoryComponent } from './Components/searchservicecategory/searchservicecategory.component';
import { SearchserviceownerComponent } from './Components/searchserviceowner/searchserviceowner.component';
import { ViewAllServiceauthenticationComponent } from './Components/view-all-serviceauthentication/view-all-serviceauthentication.component';
import { ViewAllServiceownerComponent } from './Components/view-all-serviceowner/view-all-serviceowner.component';
import { ViewAllComponent } from './Components/view-all/view-all.component';
import { ViewallservicebookingComponent } from './Components/viewallservicebooking/viewallservicebooking.component';
import { ViewallservicecategoryComponent } from './Components/viewallservicecategory/viewallservicecategory.component';

const routes: Routes = [
  {path:'viewall',component:ViewAllComponent},
  {path:'addcustomer',component:AddcustomerComponent},
  {path:'deletecustomer',component:DeletecustomerComponent},
  {path:'editcustomer',component:EditcustomerComponent},
  {path:'searchcustomer',component:SearchcustomerComponent},
  {path:'viewallserviceauthentication',component:ViewAllServiceauthenticationComponent},
  {path:'addserviceauthentication',component:AddserviceauthenticationComponent},
  {path:'deleteserviceauthentication',component:DeleteserviceauthenticationComponent},
  {path:'editserviceauthentication',component:EditserviceauthenticationComponent},
  {path:'searchserviceauthentication',component:SearchserviceautheticationComponent},
  {path:'viewallservicebooking',component:ViewallservicebookingComponent},
  {path:'addservicebooking',component:AddservicebookingComponent},
  {path:'deleteservicebooking',component:DeleteservicebookingComponent},
  {path:'editservicebooking',component:EditservicebookingComponent},
  {path:'searchservicebooking',component:SearchservicebookingComponent},
  {path:'viewallservicecategory',component:ViewallservicecategoryComponent},
  {path:'addservicecategory',component:AddservicecategoryComponent},
  {path:'deleteservicecategory',component:DeleteservicecategoryComponent},
  {path:'editservicecategory',component:EditserviceCategoryComponent},
  {path:'searchservicecategory',component:SearchservicecategoryComponent},
  {path:'viewallserviceowner',component:ViewAllServiceownerComponent},
  {path:'addserviceowner',component:AddserviceownerComponent},
  {path:'deleteserviceowner',component:DeleteserviceownerComponent},
  {path:'editserviceowner',component:EditserviceOwnerComponent},
  {path:'searchserviceowner',component:SearchserviceownerComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
