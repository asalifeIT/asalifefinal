/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-catering',
  templateUrl: './catering.page.html',
  styleUrls: ['./catering.page.scss'],
})
export class CateringPage implements OnInit {

  aduan: any[1] = [
    {id: 1, name: '', src: '', background: '', page: ''},
     ];

     rating: any[2] = [
      {id: 1, name: '', src: '', background: '', page: ''},
       ];


   constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

back (){
  this.router.navigate(['catering']);
}




}
