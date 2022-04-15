import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private serviceService: ServiceService,
    private navCtrl: NavController,
  ) {
    this.initializeApp();
  }
  private router: Router

  home() {
    this.router.navigate(['tabs/tab1']);
  }
  nearby() {
    this.router.navigate(['tabs/tab2']);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.Auth();
    });
  }

  Auth(){
    this.serviceService.authenticationState.subscribe((data) => {
      if (data==true) {
          this.navCtrl.navigateRoot(['home']);
        } else {
          this.navCtrl.navigateRoot(['login']);
        }
   });
  }
}
