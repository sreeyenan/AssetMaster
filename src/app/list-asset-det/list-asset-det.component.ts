import { Component, OnInit } from '@angular/core';
import { Assetdet } from '../assetdet';
import { Observable } from 'rxjs';
import { AssetDetService } from '../asset-det.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-asset-det',
  templateUrl: './list-asset-det.component.html',
  styleUrls: ['./list-asset-det.component.scss']
})
export class ListAssetDetComponent implements OnInit {

  assetDets: Observable<Assetdet[]>
  

  constructor(private assetDetService:AssetDetService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.assetDets = this.assetDetService.getAssetDetsList();
    console.log(this.assetDets);
  }
  deleteAssetDet(adId: number,assetdet:Assetdet){
    this.assetDetService.deleteAssetDet(adId,assetdet)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }
  AssetDetDetails(adId: number){
    console.log(adId);
    this.router.navigate(['home/show-asset-det',adId]);
  }

  updateAssetDet(adId: number){
    console.log(adId);
    this.router.navigate(['home/update-asset-det',adId]);
  }
  list1(){
    this.router.navigate(['home/create-asset-det']);
  }

}