import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendordet } from '../vendordet';
import { VendorDetService } from '../vendor-det.service';

@Component({
  selector: 'app-show-vendor-det',
  templateUrl: './show-vendor-det.component.html',
  styleUrls: ['./show-vendor-det.component.scss']
})
export class ShowVendorDetComponent implements OnInit {
  vdId: number;
  vendorDet: Vendordet;
  constructor(private route: ActivatedRoute, private router: Router,
    private vendorDetService: VendorDetService) { }

  ngOnInit() {
    this.vendorDet = new Vendordet();
    this.vdId = this.route.snapshot.params['vdId'];

    this.vendorDetService.getVendorDet(this.vdId)
      .subscribe(data => {
        console.log(data)
        this.vendorDet = data;
      }, error => console.log(error));
  }
  list() {
    this.router.navigate(['home/list-vendor-det']);
  }

}
