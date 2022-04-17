import { Component, OnInit } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { tap, timeout } from 'rxjs/operators';
import { observable, ReplaySubject } from 'rxjs';
import { Platform, ToastController } from '@ionic/angular';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  selector: 'app-aduancatering',
  templateUrl: './aduancatering.page.html',
  styleUrls: ['./aduancatering.page.scss'],
})

export class AduancateringPage {
  [x: string]: any;
  Data:any;
  DataResponse:any;
  DataCheckLogin:any;
  authenticationState = new ReplaySubject();
  token:any;
  API_URL = 'http://asabeta.com/api/';
  TOKEN_KEY = 'accesstoken';
  REFRESH_TOKEN_KEY = 'refreshtoken';
  ROLE = 'role';
  server: string;
 constructor(
  private http: HttpClient,
  private platform: Platform,
  public toastController: ToastController
) {
  this.platform.ready().then(() => {
    this.onSubmit();
  });
  
 }
 options(Data: string, options: any) {
  throw new Error('Method not implemented.');
}
onSubmit(){
let dataStorage=JSON.parse(localStorage.getItem(this.TOKEN_KEY));
this.token=dataStorage;
console.log("token : " +this.token);
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': "Bearer "+ this.token

});
return this.http.post<any>(this.API_URL + 'catering/add',  {headers: headers, observable: 'response' }).pipe(
  timeout(8000),
  tap(Data => {
    this.Data=Data;
    if(Data==200){
     localStorage.setItem(this.TOKEN_KEY, JSON.stringify(this.Data));
  }else{
    this.authenticationState.next(false);
  }
  return Data;
  
}),

catchError((err, caught) => {
  let message = "error";

  if(err.data==400){
    message='Data Aduan Belum Lengkap.';
  } else if(err.data==401){
    message='Data Aduan Belum Ada.';
  } else {
    message='Tidak ada koneksi internet. Silakan periksa koneksi Anda.';
  }
  return throwError(message);
})

);
}

} 


