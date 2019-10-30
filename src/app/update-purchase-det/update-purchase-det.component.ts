import { Component, OnInit } from '@angular/core';
import { Purchasedet } from '../purchasedet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Vendordet } from '../vendordet';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseDetService } from '../purchase-det.service';

@Component({
  selector: 'app-update-purchase-det',
  templateUrl: './update-purchase-det.component.html',
  styleUrls: ['./update-purchase-det.component.scss']
})
export class UpdatePurchaseDetComponent implements OnInit {
  pdId:number;
  purchaseDet: Purchasedet = new Purchasedet();
  submitted: boolean;
  angForm:FormGroup;
  vendorDets: Observable<Vendordet[]>;
  PurchaseDets:Observable<Purchasedet[]>;
  constructor(private fb: FormBuilder,private purchaseDetService:PurchaseDetService,
    private router: Router,private route: ActivatedRoute){ }

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
    // this.submitted = true;
    // this.purchaseDet = new Purchasedet();
    // this.purchaseDet = Object.assign({}, this.purchaseDet, this.angForm.value);
    // this.purchaseDet.pdOrder=this.angForm.controls.pdOrder.value;
    // this.purchaseDet.pdType=this.angForm.controls.pdType.value;
    // this.purchaseDet.pdName=this.angForm.controls.pdName.value;
    // this.purchaseDet.pdVendor=this.angForm.controls.pdVendor.value;
    // this.purchaseDet.pdQty=this.angForm.controls.pdQty.value;
    // this.purchaseDet.pdDate=this.angForm.controls.pdDate.value;
    this.save();
  }
  save() {
    this.purchaseDetService.updatePurchaseDet(this.pdId,this.purchaseDet)
      .subscribe(data => console.log(data), error => console.log(error));
      this.gotoList();
  }
  gotoList() {
    this.vendorDets = this.purchaseDetService.getPurchaseDetsList();
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
list() {
  this.router.navigate(['home/list-purchase-det']);
}
}

