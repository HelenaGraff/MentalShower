import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
email: string;
pass: string;
  constructor(public auth:AngularFireAuth,public fire:FirebaseService) { }

  ngOnInit() {
  }

signIn(){
 console.log('Email: ' + this.email, 'Password: ' + this.pass);

 this.auth.signInWithEmailAndPassword(this.email,this.pass);
 this.auth.user.subscribe(user=>{
  this.fire.add_student_with_id({
FirstName:"",
LastName:"",
Age: 1,
ProfilePicURL:"",

  },user.uid);
 })

 
}


}
