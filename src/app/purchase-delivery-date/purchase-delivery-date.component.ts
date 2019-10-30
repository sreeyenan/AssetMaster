import { Component, OnInit } from '@angular/core';
import { Purchasedet } from '../purchasedet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PurchaseDetService } from '../purchase-det.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Assetmaster } from '../assetmaster';
import { AssetMasterService } from '../asset-master.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-purchase-delivery-date',
  templateUrl: './purchase-delivery-date.component.html',
  styleUrls: ['./purchase-delivery-date.component.scss']
})
export class PurchaseDeliveryDateComponent implements OnInit {
  count:number;
  pdId:number;
  purchaseDet: Purchasedet = new Purchasedet();
  submitted: boolean;
  angForm:FormGroup;
  assetMaster:Assetmaster;
  assetMasters: Observable<Assetmaster[]>;
  PurchaseDets:Observable<Purchasedet[]>;
  constructor(private fb: FormBuilder,private purchaseDetService:PurchaseDetService,
    private router: Router,private route: ActivatedRoute,private assetmasterService:AssetMasterService,private toastr:ToastrService){ }

  ngOnInit() {

    this.createForm();
    this.getpdType();
    this.getpdName();
    this.getpdVendor();

    this.route.params.subscribe(params => {
      this.purchaseDetService.getPurchaseDet(params['pdId']).subscribe(res => {
        this.purchaseDet = res;
      });
    });
  }
  createForm() {
    this.angForm = this.fb.group({
      amSNumber:['',Validators.required],
      amWarranty:['',Validators.required],
      amMYear:['',Validators.required],
      amFrom:['',Validators.required],
      amTo:['',Validators.required],
      pdDdate: ['', Validators.required ]
    });
  }
  onSubmit() {
    this.submitted = true;
    this.assetMaster=new Assetmaster();
    this.assetMaster.amVendor=this.purchaseDet.pdVendor;
    this.assetMaster.amType=this.purchaseDet.pdType;
    this.assetMaster.amModel=this.purchaseDet.pdName;
    this.assetMaster.amPdDate=this.purchaseDet.pdDate;
    this.assetMaster.amMYear=this.angForm.controls.amMYear.value;
    this.assetMaster.amSNumber=this.angForm.controls.amSNumber.value;
    this.assetMaster.amWarranty=this.angForm.controls.amWarranty.value;
    this.assetMaster.amFrom=this.angForm.controls.amFrom.value;
    this.assetMaster.amTo=this.angForm.controls.amTo.value;
      this.purchaseDet.pdDdate=this.angForm.controls.pdDdate.value;
    this.save();
  }
  save() {
    this.purchaseDetService.updateDeliveryDate(this.pdId,this.purchaseDet)
      .subscribe(data => console.log(data), error => console.log(error));
      if(this.assetMaster.amWarranty=='Yes'){
      this.insertData();
      }
      else{
      this.insertDataWithout();
    }
      this.gotoList();
  }
  
  c:number;
   insertData(){
     this.count=this.purchaseDet.pdQty;
     for(this.c=0;this.c<this.count;this.c++){
       
     this.assetmasterService.createAssetMaster(this.assetMaster).subscribe(
      data=>console.log(data),error=>console.log(error)); 
        
     }
        this.toastr.success('Asset Master Updated');
   }
   insertDataWithout(){
    this.count=this.purchaseDet.pdQty;
    for(this.c=0;this.c<this.count;this.c++){
     this.assetmasterService.createAssetMasterwithout(this.assetMaster).subscribe(
       data=>console.log(data),error=>console.log(error)); 
    }
       this.toastr.success('Asset Master Updated');
  }

   gotoList() {
    this.purchaseDetService.getPurchaseDetsList();
    this.router.navigate(['home/list-asset-master']);
    this.toastr.success('Delivered date Included','Asset Management');
  }
  
  assetType: String[];
getpdType():void{
  this.purchaseDetService.getpdType()
  .subscribe((response)=>{
  
    this.assetType=response as String[];
    // console.log(this.assetType);
  },(error)=>{
    console.log(error);
  })
}

  assetName : String[];
getpdName():void{
  this.purchaseDetService.getpdName()
  .subscribe((response)=>{
   
    this.assetName=response as String[];
    // console.log(this.assetName);
  },(error)=>{
    console.log(error);
  })
}
vendorName : String[];
getpdVendor():void{
  this.purchaseDetService.getpdVendor()
  .subscribe((response)=>{
   
    this.vendorName=response as String[];
    console.log(this.vendorName);
  },(error)=>{
    console.log(error);
  })
}

}
