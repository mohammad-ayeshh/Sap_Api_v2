import { Component, OnInit } from '@angular/core';
import { HttpMethodsService } from '../services/http-methods.service';
import { PurchaseOrder } from '../interface/purchase-order';
import { DocumentLine } from '../interface/document-line';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Item } from '../interface/item';

@Component({
  selector: 'app-send-po',
  templateUrl: './send-po.component.html',
  styleUrls: ['./send-po.component.css']
})
export class SendPOComponent implements OnInit {

  myForm: FormGroup;

  
  items2?: Item[] ;
  
  selectedName: string | undefined;
  selectedItem: DocumentLine = {
    ItemCode: 'a7a',
    Quantity: null,
    TaxCode: null,
    UnitPrice: null
  } ;


  POlines: DocumentLine[] = [
    this.selectedItem
  ]

  purchaseOrder: PurchaseOrder = {
    DocEntry:NaN,
    CardCode: 'V99000',
    DocumentLines: this.POlines
  };
 
  ngOnInit(): void {
    this.getItems();

this.myForm.valueChanges.subscribe(console.log) 

  }
  
 constructor(private httpService:HttpMethodsService,private fb: FormBuilder){
  
  this.myForm = this.fb.group({
    cardCode: [''],
    itemCode: [''],
    quantity: [''],
    taxCode: [''],
    unitPrice: ['']

  });
 }
 submitForm2(): void {
   debugger;
   console.log(this.myForm.value.cardCode)
   this.myForm.value.cardCode.subscribe(console.log)
   console.log(this.myForm.value.cardCode);
  if (this.myForm.valid) {
    console.log(this.myForm.value.cardCode);
    debugger;
    // Process the form data here
  }
}
 submitForm() {

  console.log(this.purchaseOrder.DocumentLines[0].ItemCode);
  console.log('a7a');
  console.log(this.selectedItem.ItemCode);
  
 this.postPurchaseOrder(this.purchaseOrder);
 
  }
 
 postPurchaseOrder(purchaseOrder1?:PurchaseOrder) {
  this.httpService.postPurchaseOrder(purchaseOrder1).subscribe(
    (response) => {
      debugger;
      console.log(response);

    },
    (error) => {
      console.error('Error:', error);
    }
  )
 }

 getItems(){
  this.httpService.getItems().subscribe
  (
    Response => {
      debugger;
      
this.items2 = Response.value;
console.log(Response);

    },
    (error)=>{
      console.error('Error:', error);}

  )
 }
}