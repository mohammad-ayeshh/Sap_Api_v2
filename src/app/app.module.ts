import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { SendPOComponent } from './send-po/send-po.component';
import { POListComponent } from './polist/polist.component';
import { POListDtailsComponent } from './polist-dtails/polist-dtails.component';

import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ArrayFormComponent } from './array-form/array-form.component';

const appRoute : Routes =[
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'POPost', component: SendPOComponent},
  {path: 'POlist', component: POListComponent},
  
  {path: 'POListdDtails/:id', component: POListDtailsComponent},
   
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SendPOComponent,
    POListComponent,
    POListDtailsComponent,
    ArrayFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }