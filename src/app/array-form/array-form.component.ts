import { Component,OnInit } from '@angular/core';
import {  FormArray,FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})
export class ArrayFormComponent implements OnInit  {

myForm: FormGroup =new FormGroup({}) ;

constructor(private fb: FormBuilder){}
  ngOnInit(): void {
   
    this.myForm = this.fb.group({
      email:'',
      phones: this.fb.array([]) 
    })
  }
get phoneForms(){
  return this.myForm?.get('phones') as FormArray
}
addPhone(){

  const phone = this.fb.group({

    area:[],
    prefix: [],
    line: [],

  })
 this.phoneForms.push(phone);
}

deletePhone(i: number){
this.phoneForms.removeAt(i)
}
}
