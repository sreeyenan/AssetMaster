import { Component, OnInit } from '@angular/core';
import { Vendordet } from '../vendordet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Assetdet } from '../assetdet';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorDetService } from '../vendor-det.service';

@Component({
  selector: 'app-update-vendor-det',
  templateUrl: './update-vendor-det.component.html',
  styleUrls: ['./update-vendor-det.component.scss']
})
export class UpdateVendorDetComponent implements OnInit {
  vdId: number;
  vendorDet: Vendordet = new Vendordet();
  submitted: boolean;
  angForm:FormGroup;
  vendorDets: Observable<Vendordet[]>;
  assetDets:Observable<Assetdet[]>;
  
  constructor(private fb: FormBuilder,private vendorDetService:VendorDetService,
    private router: Router,private route: ActivatedRoute) { }
  ngOnInit() {
    this.createForm();
    this.getVdType();
    this.getVdName();

    this.route.params.subscribe(params => {
      this.vendorDetService.getVendorDet(params['vdId']).subscribe(res => {
        this.vendorDet = res;
      });
    });
    
  }

  createForm() {
    this.angForm = this.fb.group({
      vdName: ['', Validators.required ],
      vdAType: ['', Validators.required ],
      vdAName: ['', Validators.required ],
      vdFrom: ['', Validators.required ],
      vdTo: ['', Validators.required ],
      vdAddress: ['', Validators.required ]
    });
  }
  onSubmit() {
    // this.submitted = true;
    // this.vendorDet = new Vendordet();
    // this.vendorDet = Object.assign({}, this.vendorDet, this.angForm.value);
    // this.vendorDet.vdName=this.angForm.controls.vdName.value;
    // this.vendorDet.vdAType=this.angForm.controls.vdAType.value;
    // this.vendorDet.vdAName=this.angForm.controls.vdAName.value;
    // this.vendorDet.vdFrom=this.angForm.controls.vdFrom.value;
    // this.vendorDet.vdTo=this.angForm.controls.vdTo.value;
    // this.vendorDet.vdAddress=this.angForm.controls.vdAddress.value;
    this.save();
  }
  save() {
    this.vendorDetService.updateVendorDet(this.vdId,this.vendorDet)
      .subscribe(data => console.log(data), error => console.log(error));
      this.gotoList();
  }
  gotoList() {
    this.vendorDets = this.vendorDetService.getVendorDetsList();
    this.router.navigate(['home/list-vendor-det']);
  }

  
  assetType: String[];
getVdType():void{
  this.vendorDetService.getVdAType()
  .subscribe((response)=>{
  
    this.assetType=response as String[];
    console.log(this.assetType);
  },(error)=>{
    console.log(error);
  })
}

  assetName : String[];
getVdName():void{
  this.vendorDetService.getVdAName()
  .subscribe((response)=>{
   
    this.assetName=response as String[];
    console.log(this.assetName);
  },(error)=>{
    console.log(error);
  })
}
list() {
  this.router.navigate(['home/list-vendor-det']);
}



}