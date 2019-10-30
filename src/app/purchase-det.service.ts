import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchasedet } from './purchasedet';

@Injectable({
  providedIn: 'root'
})
export class PurchaseDetService {

  baseUrl = "http://localhost:8080/ProjectMainVersion1/api"
  getPurchaseDetList: any;

  constructor(private http: HttpClient) { }
  getPurchaseDetsList(): Observable<any> {
    // console.log(this.baseUrl);
    return this.http.get(this.baseUrl + '/purchaseDetdetails');
  }

  getPurchaseDet(pdId: number): Observable<any> {
    console.log(pdId);
    return this.http.get(this.baseUrl + '/purchaseDetdetailsid/' + pdId);
  }
  createPurchaseDet(purchasedet: Object): Observable<Object> {
    return this.http.post(this.baseUrl + '/purchaseDetdetailsinsert', purchasedet);
  }
  updatePurchaseDet(pdId: number, purchasedet: Purchasedet): Observable<any> {
    // console.log(vdId,vendordet);
    return this.http.put(this.baseUrl + '/purchaseDetdetailsupdate/' + pdId, purchasedet);
  }
  deletePurchaseDet(pdId: number, purchasedet: Purchasedet): Observable<any> {
    return this.http.put(this.baseUrl + '/purchaseDetdetailsdelete/' + pdId, purchasedet);
  }

  getpdType(): Observable<any> {
    return this.http.get(this.baseUrl + '/getvdatype');
  }
  getpdName(): Observable<any> {
    return this.http.get(this.baseUrl + '/getvdaname');
  }
  getpdVendor(): Observable<any> {
    return this.http.get(this.baseUrl + '/getvdname');
  }
  updateDeliveryDate(pdId:number,purchasedet:Purchasedet):Observable<any>{
    return this.http.put(this.baseUrl+'/insertDeliverydate/'+pdId,purchasedet);
  }
  duplicationcheck(pdType:String,pdName:String,pdVendor:String): any {
    // console.log("inside duplication check: ");
    return this.http.get(this.baseUrl+'/duplication1/'+pdType+'/'+pdName+'/'+pdVendor);
  }
  getRelativepdName(pdAType:String[]):Observable<any>{
    console.log("Insode getRpdName");
    console.log(pdAType)
    return this.http.get(this.baseUrl+'/getRelativevdAName/'+pdAType);
  }

  getRelativepdVendor(pdAType:String[],pdAName:String[]):Observable<any>{
    return this.http.get(this.baseUrl+'/getRelativevdName/'+pdAType+'/'+pdAName);
  }


  


}
