import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import {Storage} from '@ionic/storage-angular';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private fb: Facebook, private router:Router, private storage:Storage, private firebase:FirebaseService) {

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
    
     this.firebase.add_student_with_id({
       FirstName:res.name.split(" ")[0],
       LastName:res.name.split(" ")[1],
       Age:0,
       ProfilePicURL:res.picture.data.url

     },res.id);
   }));

    console.log('Logged into Facebook!', res); 
    this.router.navigate(['/tabs/tab4']);
  
  
  
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