import { Component, OnInit } from '@angular/core';
import { Purchasedet } from '../purchasedet';
import { PurchaseDetService } from '../purchase-det.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-purchase-det',
  templateUrl: './show-purchase-det.component.html',
  styleUrls: ['./show-purchase-det.component.scss']
})
export class ShowPurchaseDetComponent implements OnInit {
  pdId: number;
  purchaseDet: Purchasedet;
  constructor(private route: ActivatedRoute, private router: Router,
    private purchaseDetService: PurchaseDetService) { }

  ngOnInit() {
    this.purchaseDet = new Purchasedet();
    this.pdId = this.route.snapshot.params['pdId'];
    console.log(this.pdId);
    console.log(this.purchaseDet);
    this.purchaseDetService.getPurchaseDet(this.pdId)
      .subscribe(data => {
        console.log(data)
        this.purchaseDet = data;
      }, error => console.log(error));
  }
  list() {
    this.router.navigate(['home/list-purchase-det']);
  }
}
