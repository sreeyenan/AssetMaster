import { Component, OnInit } from '@angular/core';
import { Assetdet } from '../assetdet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AssetDetService } from '../asset-det.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-asset-det',
  templateUrl: './create-asset-det.component.html',
  styleUrls: ['./create-asset-det.component.scss']
})
export class CreateAssetDetComponent implements OnInit {

  assetDet: Assetdet = new Assetdet();
  submitted: boolean;
  angForm:FormGroup;
  assetDets: Observable<Assetdet[]>;
  
  constructor(private fb: FormBuilder,private assetDetService:AssetDetService,
    private router: Router,private route: ActivatedRoute,private toastr:ToastrService) {}
    ngOnInit() {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
        adType: ['', Validators.required ],
        adName: ['', Validators.required ],
        adClass: ['', Validators.required ]
      });
    }
    onSubmit() {
      this.submitted = true;
      this.assetDet = new Assetdet();
      this.assetDet = Object.assign({}, this.assetDet, this.angForm.value);
      this.assetDet.adType=this.angForm.controls.adType.value;
      this.assetDet.adName=this.angForm.controls.adName.value;
      this.assetDet.adClass=this.angForm.controls.adClass.value;
      this.assetDetService.duplicationcheck(this.assetDet.adType,this.assetDet.adName).subscribe(
        data => {
          console.log(data);
          if(data != null){
            console.log("Duplicates");
            this.toastr.error('Duplicated Values', 'Asset Management App');
            this.assetDets = this.assetDetService.getAssetDetsList();
            this.gotoList();
          }
         
         }, error =>  this.save());

    }

    save() {
      this.assetDetService.createAssetDet(this.assetDet)
        .subscribe(data => console.log(data), error => console.log(error));
        this.gotoList();
    }
    gotoList() {
      this.assetDets = this.assetDetService.getAssetDetsList();
      this.router.navigate(['home/list-asset-det']);
    }
    list() {
      this.router.navigate(['home/list-asset-det']);
    }
}
