import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpMethodsService } from '../services/http-methods.service';
import { PurchaseOrder } from '../interface/purchase-order';
import { FormGroup } from '@angular/forms';
import { DocumentLine } from '../interface/document-line';

@Component({
  selector: 'app-polist-dtails',
  templateUrl: './polist-dtails.component.html',
  styleUrls: ['./polist-dtails.component.css']
})
export class POListDtailsComponent implements OnInit{

  constructor(private router: Router, private route: ActivatedRoute , private httpService: HttpMethodsService){}
  selectedOrder?:PurchaseOrder;
  docLine?:DocumentLine[]=[];
  orders:PurchaseOrder[]=[]
  ngOnInit(): void {
    this.httpService.getPOData().subscribe({
      next:ordersList=>{
        debugger;
        this.orders=ordersList.value;
        const docEntry=this.route.snapshot.paramMap.get('id');
        const orderId=Number(docEntry);
        this.selectedOrder=this.orders.find(order=>order.DocEntry==orderId);
        this.docLine=this.selectedOrder?.DocumentLines
      }
    })
  }

}