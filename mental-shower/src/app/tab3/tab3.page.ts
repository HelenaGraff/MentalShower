import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {GroupInfoComponent} from 'src/app/group-info/group-info.component';
import {GroupInfoPagePage} from 'src/app/group-info-page/group-info-page.page';
import {ZonesPage} from 'src/app/zones/zones.page';
import {FirebaseService} from 'src/app/firebase.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public student: any;

  constructor(private alertCtrl: AlertController, private modalController: ModalController, private firebaseService: FirebaseService) {

console.log(firebaseService.read_student('mgb0t9h9RzyOOk2dI8B1'));
this.student = firebaseService.read_student('mgb0t9h9RzyOOk2dI8B1');
console.log(this.student['First Name']);

var students = firebaseService.read_students();
(students.snapshotChanges().subscribe(res => {
console.log();
res.forEach(student => {
console.log(student.payload.doc.data().FirstName);
});


 }));
}



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


