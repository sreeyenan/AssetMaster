import { Component, OnInit } from '@angular/core';
import { Purchasedet } from '../purchasedet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Vendordet } from '../vendordet';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseDetService } from '../purchase-det.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-purchase-det',
  templateUrl: './create-purchase-det.component.html',
  styleUrls: ['./create-purchase-det.component.scss']
})
export class CreatePurchaseDetComponent implements OnInit {
  purchaseDet: Purchasedet = new Purchasedet();
  submitted: boolean;
  angForm:FormGroup;
  purchaseDets: Observable<Vendordet[]>;
  PurchaseDets:Observable<Purchasedet[]>;
  pdType:String;
  pdName:String;
 pdAType:String[];
  constructor(private fb: FormBuilder,private purchaseDetService:PurchaseDetService,
    private router: Router,private route: ActivatedRoute,private toastr:ToastrService){ }

  ngOnInit() {

    this.createForm();
    this.getpdType();
    this.getpdName();
    this.getpdVendor();
    this.getpdType();
  }

  createForm() {
    this.angForm = this.fb.group({
      pdOrder: ['', Validators.required ],
      pdType: ['', Validators.required ],
      pdName: ['', Validators.required ],
      pdVendor: ['', Validators.required ],
      pdQty: ['', Validators.required ],
      pdDate: ['', Validators.required ],
      // vdAddress: ['', Validators.required ]
    });
  }
  onSubmit() {
    this.submitted = true;
    this.purchaseDet = new Purchasedet();
    this.purchaseDet = Object.assign({}, this.purchaseDet, this.angForm.value);
    this.purchaseDet.pdOrder=this.angForm.controls.pdOrder.value;
    this.purchaseDet.pdType=this.angForm.controls.pdType.value;
    this.purchaseDet.pdName=this.angForm.controls.pdName.value;
    this.purchaseDet.pdVendor=this.angForm.controls.pdVendor.value;
    this.purchaseDet.pdQty=this.angForm.controls.pdQty.value;
    this.purchaseDet.pdDate=this.angForm.controls.pdDate.value;
    this.purchaseDetService.duplicationcheck(this.purchaseDet.pdType,this.purchaseDet.pdName,this.purchaseDet.pdVendor).subscribe(
      data => {
        console.log(data);
        if(data != null){
          console.log("Duplicates");
          this.toastr.error('Duplicated Values', 'Asset Management App');
          this.purchaseDets = this.purchaseDetService.getPurchaseDetsList();
          
          this.gotoList();
        }
       
       },this.save());
  }
  save() {
    this.purchaseDetService.createPurchaseDet(this.purchaseDet)
    
      .subscribe(data => console.log(data), error => console.log(error));
      
      this.gotoList();
  }
  gotoList() {
    this.purchaseDets = this.purchaseDetService.getPurchaseDetsList();
    this.router.navigate(['home/list-purchase-det']);
  }
  assetType: String[];
getpdType():void{
  this.purchaseDetService.getpdType()
  .subscribe((response)=>{
  
    this.assetType=response as String[];
    console.log(this.assetType);
  },(error)=>{
    console.log(error);
  })
}
//Non Relative Dropdown
  assetName : String[];
getpdName():void{
  this.purchaseDetService.getpdName()
  .subscribe((response)=>{
   
    this.assetName=response as String[];
    console.log(this.assetName);
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
//Relative Dropdown
onSelect(pdType){
  this.pdAType=pdType;
  
  console.log(this.pdAType)
  this.purchaseDetService.getRelativepdName(pdType)
  .subscribe((response)=>{
    this.assetName =response as String[];
    
  },(error)=>{
    console.log(error);
  })
}

onSelectName(pdName){
  this.purchaseDetService.getRelativepdVendor(this.pdAType,pdName)
  .subscribe((response)=>{
    this.vendorName =response as String[];
    
  },(error)=>{
    console.log(error);
  })
}

list() {
  this.router.navigate(['home/list-purchase-det']);
}
}
