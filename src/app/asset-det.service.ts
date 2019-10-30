import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Assetdet} from './assetdet'

@Injectable({
  providedIn: 'root'
})
export class AssetDetService {

  baseUrl = "http://localhost:8080/ProjectMainVersion1/api"
    getAssetDetList: any;


  constructor(private http:HttpClient) { }


getAssetDet(adId: number):Observable<any>{
  return this.http.get(this.baseUrl+'/assetDetdetailsid/'+adId);
}

getAssetDetsList(): Observable<any>{
  console.log(this.baseUrl);
 return this.http.get(this.baseUrl+'/assetDetdetails');
}

createAssetDet(assetdet:Object):Observable<Object>{
 return this.http.post(this.baseUrl+'/assetDetdetailsinsert',assetdet);
}

updateAssetDet(adId:number,assetdet:Assetdet):Observable<any>{
  console.log(adId,assetdet);
 return this.http.put(this.baseUrl+'/assetDetdetailsupdate/'+adId,assetdet);
}

deleteAssetDet(adId:number,assetdet:Assetdet):Observable<any>{
 return this.http.put(this.baseUrl+'/assetDetdetailsdelete/'+adId,assetdet);
}

duplicationcheck(adType:String, adName:String): any {
  // console.log("inside duplication check: ");
  return this.http.get(this.baseUrl+'/duplication/'+adType+'/'+adName);
}
} 