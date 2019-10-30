import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule,ToastrService} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { HttpClientModule } from '@angular/common/http';
import { CreateAssetDetComponent } from './create-asset-det/create-asset-det.component';
import { ShowAssetDetComponent } from './show-asset-det/show-asset-det.component';
import { UpdateAssetDetComponent } from './update-asset-det/update-asset-det.component';
import { ListAssetDetComponent } from './list-asset-det/list-asset-det.component';
import { HomeComponent } from './home/home.component';



import { ListVendorDetComponent } from './list-vendor-det/list-vendor-det.component';
import { CreateVendorDetComponent } from './create-vendor-det/create-vendor-det.component';
import { UpdateVendorDetComponent } from './update-vendor-det/update-vendor-det.component';
import { ShowVendorDetComponent } from './show-vendor-det/show-vendor-det.component';
import { ListPurchaseDetComponent } from './list-purchase-det/list-purchase-det.component';
import { CreatePurchaseDetComponent } from './create-purchase-det/create-purchase-det.component';
import { ShowPurchaseDetComponent } from './show-purchase-det/show-purchase-det.component';
import { UpdatePurchaseDetComponent } from './update-purchase-det/update-purchase-det.component';
import { HomeuserComponent } from './homeuser/homeuser.component';
import { PurchaseDeliveryDateComponent } from './purchase-delivery-date/purchase-delivery-date.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ListAssetMasterComponent } from './list-asset-master/list-asset-master.component';

import { ShowAssetMasterComponent } from './show-asset-master/show-asset-master.component';
import { UpdateAssetMasterComponent } from './update-asset-master/update-asset-master.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAssetDetComponent,
    ShowAssetDetComponent,
    UpdateAssetDetComponent,
    ListAssetDetComponent,
    HomeComponent,
    ListVendorDetComponent,
    CreateVendorDetComponent,
    UpdateVendorDetComponent,
    ShowVendorDetComponent,
    ListPurchaseDetComponent,
    CreatePurchaseDetComponent,
    ShowPurchaseDetComponent,
    UpdatePurchaseDetComponent,
    HomeuserComponent,
    PurchaseDeliveryDateComponent,
    ListAssetMasterComponent,
 
    ShowAssetMasterComponent,
    UpdateAssetMasterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl:'never'}),
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule,

  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }