import { Component, OnInit } from '@angular/core';
import { VendorDetService } from '../vendor-det.service';
import { Router } from '@angular/router';
import { Vendordet } from '../vendordet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-vendor-det',
  templateUrl: './list-vendor-det.component.html',
  styleUrls: ['./list-vendor-det.component.scss']
})
export class ListVendorDetComponent implements OnInit {
  vendorDets: Observable<Vendordet[]>
  constructor(private vendorDetService: VendorDetService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.vendorDets = this.vendorDetService.getVendorDetsList();
    console.log(this.vendorDets);
  }
  deleteVendorDet(vdId: number, vendordet: Vendordet) {
    this.vendorDetService.deleteVendorDet(vdId, vendordet)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  VendorDetDetails(vdId: number) {
    console.log(vdId);
    this.router.navigate(['home/show-vendor-det', vdId]);
  }
  updateVendorDet(vdId: number) {
    console.log(vdId);
    this.router.navigate(['home/update-vendor-det', vdId]);
  }
  list1() {
    this.router.navigate(['home/create-vendor-det']);
  }
}
