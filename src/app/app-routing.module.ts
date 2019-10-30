import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { CreateAssetDetComponent } from './create-asset-det/create-asset-det.component';
import { ListAssetDetComponent } from './list-asset-det/list-asset-det.component';
import { UpdateAssetDetComponent } from './update-asset-det/update-asset-det.component';
import { ShowAssetDetComponent } from './show-asset-det/show-asset-det.component';
import { ListVendorDetComponent } from './list-vendor-det/list-vendor-det.component';
import { CreateVendorDetComponent } from './create-vendor-det/create-vendor-det.component';
import { UpdateVendorDetComponent } from './update-vendor-det/update-vendor-det.component';
import { ShowVendorDetComponent } from './show-vendor-det/show-vendor-det.component';
import { ListPurchaseDetComponent } from './list-purchase-det/list-purchase-det.component';
import { CreatePurchaseDetComponent } from './create-purchase-det/create-purchase-det.component';
import { UpdatePurchaseDetComponent } from './update-purchase-det/update-purchase-det.component';
import { ShowPurchaseDetComponent } from './show-purchase-det/show-purchase-det.component';
import { PurchaseDeliveryDateComponent } from './purchase-delivery-date/purchase-delivery-date.component';
import { ListAssetMasterComponent } from './list-asset-master/list-asset-master.component';
import { ShowAssetMasterComponent } from './show-asset-master/show-asset-master.component';




const routes: Routes = [
 {path:'',pathMatch:'full',redirectTo:'login'},
 {path:'login',component:LoginComponent},
 {path:'home',component:HomeComponent, canActivate: [AuthGuard] ,
                        children: [
                        // {path:'home',component:HomeComponent},
                        {path:'list-asset-det',component:ListAssetDetComponent},
                        {path:'create-asset-det',component:CreateAssetDetComponent},
                        {path:'update-asset-det/:adId',component:UpdateAssetDetComponent},
                        {path:'show-asset-det/:adId',component:ShowAssetDetComponent},
                        {path:'list-vendor-det',component:ListVendorDetComponent},
                        {path:'create-vendor-det',component:CreateVendorDetComponent},
                        {path:'update-vendor-det/:vdId',component:UpdateVendorDetComponent},
                        {path:'show-vendor-det/:vdId',component:ShowVendorDetComponent},
                        {path:'list-purchase-det',component:ListPurchaseDetComponent},
                        {path:'create-purchase-det',component:CreatePurchaseDetComponent},
                        {path:'update-purchase-det/:pdId',component:UpdatePurchaseDetComponent},
                        {path:'show-purchase-det/:pdId',component:ShowPurchaseDetComponent},
                        {path:'purchase-delivery-date/:pdId',component:PurchaseDeliveryDateComponent},
                        {path:'list-asset-master',component:ListAssetMasterComponent},
                        {path:'show-asset-master/:amId',component:ShowAssetMasterComponent}
                        
                        ]
                       
                        },
{path:'homeuser',component:HomeuserComponent, canActivate: [AuthGuard], 
                        children: [
                        {path:'list-purchase-det',component:ListPurchaseDetComponent},
                        {path:'create-purchase-det',component:CreatePurchaseDetComponent},
                        {path:'update-purchase-det/:pdId',component:UpdatePurchaseDetComponent},
                        {path:'show-purchase-det/:pdId',component:ShowPurchaseDetComponent},
                        {path:'purchase-delivery-date/:pdId',component:PurchaseDeliveryDateComponent},
                        {path:'list-asset-master',component:ListAssetMasterComponent},
                        {path:'show-asset-master/:pdId',component:ShowAssetMasterComponent}
                        ]
                      }
                      ];



 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
