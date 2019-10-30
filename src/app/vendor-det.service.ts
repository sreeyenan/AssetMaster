import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendordet } from './vendordet'

@Injectable({
  providedIn: 'root'
})
export class VendorDetService {

  baseUrl = "http://localhost:8080/ProjectMainVersion1/api"
  getVendorDetList: any;

  constructor(private http: HttpClient) { }

  getVendorDetsList(): Observable<any> {
    // console.log(this.baseUrl);
    return this.http.get(this.baseUrl + '/vendorDetdetails');
  }

  getVendorDet(vdId: number): Observable<any> {
    return this.http.get(this.baseUrl + '/vendorDetdetailsid/' + vdId);
  }
  createVendorDet(vendordet: Object): Observable<Object> {
    return this.http.post(this.baseUrl + '/vendorDetdetailsinsert', vendordet);
  }
  updateVendorDet(vdId: number, vendordet: Vendordet): Observable<any> {
    // console.log(vdId,vendordet);
    return this.http.put(this.baseUrl + '/vendorDetdetailsupdate/' + vdId, vendordet);
  }
  deleteVendorDet(vdId: number, vendordet: Vendordet): Observable<any> {
    return this.http.put(this.baseUrl + '/vendorDetdetailsdelete/' + vdId, vendordet);
  }

  getVdAType(): Observable<any> {
    return this.http.get(this.baseUrl + '/getadtype');
  }
  getVdAName(): Observable<any> {
    return this.http.get(this.baseUrl + '/getadname');
  }
  duplicationcheck(vdName:String,vdAType:String,vdAName:String): any {
    // console.log("inside duplication check: ");
    return this.http.get(this.baseUrl+'/duplication/'+vdName+'/'+vdAType+'/'+vdAName);
  }


}
