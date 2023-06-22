import { Component, OnInit } from '@angular/core';
import { HttpMethodsService } from '../services/http-methods.service';
import { PurchaseOrder } from '../interface/purchase-order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polist',
  templateUrl: './polist.component.html',
  styleUrls: ['./polist.component.css']
})
export class POListComponent implements OnInit {
ngOnInit(): void {
this.getPO();
}

constructor(private httpMethod:HttpMethodsService,private router:Router){}
data :PurchaseOrder[]=[];
data2 :any;

getPO(){
  this.httpMethod.getPOData().subscribe(
    (response)=>{
      debugger;
      this.data=response.value;
      console.log(this.data);
    }
    
      //this.data2 =  response.value.DocumentLines
  )

}
navigateToDetails(order:PurchaseOrder){
   this.router.navigate(['/POListdDtails',order.DocEntry]);
}
}