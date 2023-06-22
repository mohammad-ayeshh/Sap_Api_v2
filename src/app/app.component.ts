import { Component, OnInit } from '@angular/core';
import { HttpMethodsService } from './services/http-methods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private httpService: HttpMethodsService){}

  ngOnInit(): void {
    this.login();
  }
  title = 'Sap_Api_v2';

  login(){
    this.httpService.login().subscribe(
      (response) => {
        console.log(response.SessionId);
      },
      (error) => {
        console.log('Error:', error);
      }
    );

  }
}
