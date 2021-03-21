import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {GroupInfoComponent} from 'src/app/group-info/group-info.component';
import {GroupInfoPagePage} from 'src/app/group-info-page/group-info-page.page';
import {ZonesPage} from 'src/app/zones/zones.page';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertCtrl: AlertController, private modalController: ModalController) {}
 

  async onIconClick() {
    const modal = await this.modalController.create({
      component: GroupInfoPagePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }



async ChooseClassroom() {

  console.log ('blabla');
   const modal = await this.modalController.create ({
     component: ZonesPage,
});
  return await modal.present();
}
}
