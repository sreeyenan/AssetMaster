import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Assetmaster } from './assetmaster';

@Injectable({
  providedIn: 'root'
})
export class AssetMasterService {

  baseUrl = "http://localhost:8080/ProjectMainVersion1/api"
  getAssetMasterList: any;

  constructor(private http: HttpClient) { }
  getAssetMastersList(): Observable<any> {
    // console.log(this.baseUrl);
    return this.http.get(this.baseUrl + '/assetMasterdetails');
  }
  getAssetMaster(amId: number): Observable<any> {
    console.log("service"+amId);
    return this.http.get(this.baseUrl + '/assetMasterdetailsid/' + amId);
  }
  createAssetMaster(assetmaster: Object): Observable<Object> {
    return this.http.post(this.baseUrl + '/assetMasterdetailsinsert', assetmaster);
  }
  createAssetMasterwithout(assetmaster: Object): Observable<Object> {
    return this.http.post(this.baseUrl + '/assetMasterdetailsinsertwithoutwarranty', assetmaster);
  }
  deleteAssetMaster(amId: number, assetmaster: Assetmaster): Observable<any> {
    return this.http.put(this.baseUrl + '/assetMasterdetailsdelete/' + amId, assetmaster);
  }

  duplicationcheck(amType:String,amVendor:String,amModel:String,): any {
    // console.log("inside duplication check: ");
    return this.http.get(this.baseUrl+'/duplication2/'+amType+'/'+amVendor+'/'+amModel);
  }


}
