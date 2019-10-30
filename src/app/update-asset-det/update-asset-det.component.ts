import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Assetdet } from '../assetdet';
import { AssetDetService } from '../asset-det.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-asset-det',
  templateUrl: './update-asset-det.component.html',
  styleUrls: ['./update-asset-det.component.scss']
})
export class UpdateAssetDetComponent implements OnInit {
  adId: number;
  assetDet: Assetdet = new Assetdet();
  submitted: boolean;
  angForm: FormGroup;
  assetDets: Observable<Assetdet[]>;

  constructor(private fb: FormBuilder, private assetDetService: AssetDetService,
    private router: Router, private route: ActivatedRoute, ) {

    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({

      adType: ['', Validators.required],
      adName: ['', Validators.required],
      adClass: ['', Validators.required]
    });
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.assetDetService.getAssetDet(params['adId']).subscribe(res => {
        this.assetDet = res;
      });
    });
  }

  save() {
    this.assetDetService.updateAssetDet(this.adId, this.assetDet)
      .subscribe(data => console.log(data), error => console.log(error));
    this.assetDet = new Assetdet();
    this.gotoList();
  }

  onSubmit() {
    // this.submitted = true;
    // this.assetDet = new Assetdet();
    // this.assetDet = Object.assign({}, this.assetDet, this.angForm.value);
    // this.assetDet.adType=this.angForm.controls.adType.value;
    // this.assetDet.adName=this.angForm.controls.adName.value;
    // this.assetDet.adClass=this.angForm.controls.adClass.value;
    this.save();

  }
  gotoList() {
    this.assetDets = this.assetDetService.getAssetDetsList();
    this.router.navigate(['home/list-asset-det']);
  }


}
