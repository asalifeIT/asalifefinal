/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-aduancatering',
  templateUrl: './aduancatering.page.html',
  styleUrls: ['./aduancatering.page.scss'],
})
export class AduancateringPage implements OnInit {


  constructor(
    public loadingController: LoadingController,
    private serviceService: ServiceService,
    private router: Router,
    public util: UtilService

  ) { }

  ngOnInit() {
  }


}