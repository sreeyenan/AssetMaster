import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchasedet } from '../purchasedet';
import { PurchaseDetService } from '../purchase-det.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-purchase-det',
  templateUrl: './list-purchase-det.component.html',
  styleUrls: ['./list-purchase-det.component.scss']
})
export class ListPurchaseDetComponent implements OnInit {
  purchaseDets: Observable<Purchasedet[]>
  constructor(private purchaseDetService: PurchaseDetService, private router: Router) { }
  
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.purchaseDets = this.purchaseDetService.getPurchaseDetsList();
    console.log(this.purchaseDets);
  }
  deletePurchaseDet(pdId: number, purchasedet: Purchasedet) {
    this.purchaseDetService.deletePurchaseDet(pdId, purchasedet)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  PurchaseDetDetails(pdId: number) {
    console.log(pdId);
    this.router.navigate(['home/show-purchase-det', pdId]);
  }
  updatePurchaseDet(pdId: number) {
    console.log(pdId);
    this.router.navigate(['home/update-purchase-det', pdId]);
  }
  purchaseDeliveryDate(pdId:number){
    console.log(pdId);
    this.router.navigate(['home/purchase-delivery-date',pdId]);
  }
  list1() {
    this.router.navigate(['home/create-purchase-det']);
  }
}
