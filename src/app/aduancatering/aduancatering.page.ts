import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import { NavController, ModalController, LoadingController, ToastController,Platform } from '@ionic/angular';


@Component({
  selector: 'app-aduancatering',
  templateUrl: './aduancatering.page.html',
  styleUrls: ['./aduancatering.page.scss'],
})
export class AduancateringPage implements OnInit {

  constructor(
    public loadingController: LoadingController,
    private router: Router,
    public util: UtilService
  ) { }

  ngOnInit() {
  }
  onBack(){
    this.router.navigate(['catering']);
  }
}
