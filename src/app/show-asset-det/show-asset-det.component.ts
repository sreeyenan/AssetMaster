import { Component, OnInit } from '@angular/core';
import { Assetdet } from '../assetdet';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetDetService } from '../asset-det.service';

@Component({
  selector: 'app-show-asset-det',
  templateUrl: './show-asset-det.component.html',
  styleUrls: ['./show-asset-det.component.scss']
})
export class ShowAssetDetComponent implements OnInit {

  adId: number;
  assetDet: Assetdet;

  constructor(private route: ActivatedRoute, private router: Router,
    private assetDetService: AssetDetService) { }

  ngOnInit() {
    this.assetDet = new Assetdet();
    this.adId = this.route.snapshot.params['adId'];

    this.assetDetService.getAssetDet(this.adId)
      .subscribe(data => {
        console.log(data)
        this.assetDet = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['home/list-asset-det']);
  }


}