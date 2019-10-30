import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Assetmaster } from '../assetmaster';
import { AssetMasterService } from '../asset-master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-asset-master',
  templateUrl: './list-asset-master.component.html',
  styleUrls: ['./list-asset-master.component.scss']
})
export class ListAssetMasterComponent implements OnInit {

  assetMasters: Observable<Assetmaster[]>

  constructor(private assetMasterService: AssetMasterService, private router: Router){ }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.assetMasters = this.assetMasterService.getAssetMastersList();
    console.log(this.assetMasters);
  }
  deleteAssetMaster(amId: number, assetMaster: Assetmaster) {
    this.assetMasterService.deleteAssetMaster(amId, assetMaster)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
      }
      AssetMasterDetails(amId: number) {
        console.log(amId);
        this.router.navigate(['home/show-asset-master', amId]);
      }
}
