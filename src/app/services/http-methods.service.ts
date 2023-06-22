import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { PurchaseOrder } from '../interface/purchase-order';
import{DocumentModel} from'../interface/value'

@Injectable({
  providedIn: 'root'
})
export class HttpMethodsService {

  private apiUrl = 'http://localhost:50001/b1s/v1';
  baseUrl:string ='https://localhost:44341/api/POListdDtails';
  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    const loginUrl = `${this.apiUrl}/Login`;
    
    const loginData = {
      
      CompanyDB: 'SBODemoGB',
      UserName: 'manager',
      Password: '1234',
    };
    return this.http.post(loginUrl, loginData, { withCredentials: true });
  }

  postPurchaseOrder(payload?: PurchaseOrder): Observable<any> {
    const purchaseOrderUrl = `${this.apiUrl}/PurchaseOrders`;

    // const headers = new HttpHeaders().set('B1SESSION', this.sessionId);
    // const Pheaders = new HttpHeaders()
    // .set('Content-Type', 'application/json')
    // .set('Cookie', '');

    return this.http.post(purchaseOrderUrl, payload,{ withCredentials: true }); 
  }
  getPOData(): Observable<DocumentModel> {
    const dataUrl = `${this.apiUrl}/PurchaseOrders`;


    // let headers = new HttpHeaders().set('B1SESSION', this.sessionId);
    // headers = headers.set('withCredentials', 'true');

    return this.http.get<DocumentModel>(dataUrl, { withCredentials: true });
  }
  getItems():Observable<any> {

    const dataUrl = `${this.apiUrl}/Items?$select=ItemCode,ItemName,ForeignName&$orderby=ItemCode&$top=10&$skip=1`;

    // let headers = new HttpHeaders().set('B1SESSION', this.sessionId);
    // headers = headers.set('withCredentials', 'true');

    return this.http.get(dataUrl, { withCredentials: true });
  }

  getPO(id:number):Observable<PurchaseOrder>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<PurchaseOrder>(url);
  }
}