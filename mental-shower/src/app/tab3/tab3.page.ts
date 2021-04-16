import { Component, NgModule } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {GroupInfoComponent} from 'src/app/group-info/group-info.component';
import {GroupInfoPagePage} from 'src/app/group-info-page/group-info-page.page';
import {ZonesPage} from 'src/app/zones/zones.page';
import {FirebaseService} from 'src/app/firebase.service';
import { Classroom } from '../classroom';
import { MySqlServiceService } from '../my-sql-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public student: any;
  public rooms:Classroom[];
  constructor(private alertCtrl: AlertController,mySqlService:MySqlServiceService, private modalController: ModalController, private firebaseService: FirebaseService) {

   
    mySqlService.getAllMySqlClassrooms().subscribe(data=>{
      data.forEach(item=>{
        console.log(item.classroomName);
      })
    });
   

  firebaseService.read_rooms().subscribe(res=>{
    this.rooms=res.map(e=>{
      
      return{
        id:e.payload.doc.id,
        ...e.payload.doc.data() as Classroom
      } as Classroom
      
    }
    );
    console.log(this.rooms);
  });


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

hiddenClass:boolean
selectValue:string

classesVisible()
{
  if (this.selectValue == "Your classes")
  {
    this.hiddenClass = true;
  }
  else this.hiddenClass = false;
}

}




