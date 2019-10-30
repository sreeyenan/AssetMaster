import { Component, OnInit } from '@angular/core';
import { Assetmaster } from '../assetmaster';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetMasterService } from '../asset-master.service';

@Component({
  selector: 'app-show-asset-master',
  templateUrl: './show-asset-master.component.html',
  styleUrls: ['./show-asset-master.component.scss']
})
export class ShowAssetMasterComponent implements OnInit {
  amId: number;
  assetMaster: Assetmaster;
  constructor(private route: ActivatedRoute, private router: Router,
    private assetMasterService: AssetMasterService) { }

  ngOnInit() {
    this.assetMaster = new Assetmaster();
    this.amId = this.route.snapshot.params['amId'];
    console.log("show"+this.amId);
    console.log(this.assetMaster);
    this.assetMasterService.getAssetMaster(this.amId)
      .subscribe(data => {
        console.log(data)
        this.assetMaster = data;
      }, error => console.log(error));
  }
  list() {
    this.router.navigate(['home/list-asset-master']);
  }

}
