import { Component, OnInit } from '@angular/core';
import {FirebaseService} from 'src/app/firebase.service';
import {Storage} from '@ionic/storage-angular';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  firstName:string;
  profilePictureUrl:string;
  overlayHidden: boolean = false;

  constructor(firebase:FirebaseService,public storage:Storage, private router:Router, public alertController: AlertController) {
      storage.create(); 
      this.profilePictureUrl="src/assets/basic_avatar2.jpg";
    }

    public hideOverlay() {
      //this.overlayHidden = true;
      this.router.navigate([`signup`]);
      
  }

  ngOnInit() {
  }


  logoutButton(){
    console.log("Pressing the logout button")
    this.storage.clear();
    this.router.navigate(["signup"]);
  }

  ionViewWillEnter() 
  { 
    this.ionGetProfilePicture();

    console.log("Entering profile page");
    this.storage.get("loggedIn").then(res=>{
      if (res==true){
        this.storage.get("name").then(res=>{
          this.firstName=res;
          this.overlayHidden=true;
        })
      }
      else {
        this.profilePictureUrl="src/assets/basic_avatar2.jpg";
        this.firstName="Demo Name";
        this.ShowOverlay();
      }
    })
  }

  ionGetProfilePicture()
  {
    this.storage.get("pictureUrl").then(res=>
      {this.profilePictureUrl = res}

    );   

  }

  async OnClickGiveConfirmationAlert()
  {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: 'Are you sure you want to delete this?',
      buttons: ['OK', 'Cancel']
    });

    await alert.present();
  }


ShowOverlay()
 {this.overlayHidden=false;


}
}