import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import {Storage} from '@ionic/storage-angular';
import { FirebaseService } from '../firebase.service';

import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private fb: Facebook, private router:Router, private storage:Storage, private firebase:FirebaseService, private socialAuthService: SocialAuthService) {

    storage.create();
   }

  ngOnInit() {
  }

  SignUpFacebook() {
     this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) =>{ 

    //SUCCESFUL FACEBOOK LOGIN
   (this.getUserDetail(res.authResponse.userID).then(res=>{  
    
     this.storage.set("name",res.name);
     this.storage.set("userId",res.id);
     this.storage.set("loggedIn",true);
     this.storage.set("pictureUrl",res.picture.data.url);

     console.log('Logged into Facebook!', res); 
     
     
     this.firebase.add_student_with_id({
       FirstName:res.name.split(" ")[0],
       LastName:res.name.split(" ")[1],
       Age:0,
       ProfilePicURL:res.picture.data.url,
       CurrentAirQuality:0,
      CurrentAirSpeed:0,
      CurrentHumidity:0,
      CurrentTemperature:0

     },res.id);
   }).finally(()=>{
    this.router.navigate(['/tabs/tab1']);
   }));
  })
  .catch(e => console.log('Error logging into Facebook', e));


this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }


 async getUserDetail(userid: any):Promise<any>{
  let user:facebookUser;

  var promise=new Promise((resolve,reject)=>{

    this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
    .then(res=>{  
      if (res!=null){
        
        resolve(res);
      
      }
    }).catch(e=>{
      console.log("ERROR : "+ e);

      reject();
      
    });

  });
  return promise;
}

loginWithGoogle(){
  this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res=>{

    console.log("successfully logged in with google");
    console.log(res.name);
    console.log("logged in id:"+res.id);

     this.storage.set("name",res.name);
     this.storage.set("userId",res.id);
     this.storage.set("loggedIn",true);
     this.storage.set("pictureUrl",res.photoUrl);

     this.firebase.add_student_with_id({
      FirstName:res.firstName,
      LastName:res.lastName,
      Age:0,
      ProfilePicURL:res.photoUrl,
      CurrentAirQuality:0,
      CurrentAirSpeed:0,
      CurrentHumidity:0,
      CurrentTemperature:0

    },res.id);

  }).catch(res=>{
  console.log(res);
  console.log("sad");
  }).finally(()=>{
    this.router.navigate(['/tabs/tab1']);
  });
}

}
interface facebookUser{
  email: string;
  id:  string;
  name:  string;
  picture:facebookPicture
}

interface facebookPicture{
data:{
  height:number;
  is_silhouette:boolean;
  url:string;
  width:number;
}

}