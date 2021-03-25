import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Classroom } from './classroom';
import { Student } from './student';
import { ZoneTable } from './zone-table';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(  private firestore: AngularFirestore) { 



  }

  

 async read_student(id:string):Promise<Student>{
  console.log("Students/"+id);
  var studentFinal:Student;
var student= this.firestore.doc<Student>("Students/"+id);
student.snapshotChanges().subscribe(ref=>{
 
  studentFinal={
 FirstName:ref.payload.data().FirstName,
 LastName:ref.payload.data().LastName,
 Age:ref.payload.data().Age,
 ProfilePicURL:ref.payload.data().ProfilePicURL,
 CurrentTemperature:0,
 CurrentAirSpeed:0,
 CurrentHumidity:0,
 CurrentAirQuality:0
  }

})
return studentFinal;

   



 }

 read_students():AngularFirestoreCollection<Student> {
  return this.firestore.collection("Students");



}




public add_student(student:Student){
  this.firestore.collection("Students").add(student);
}

public add_student_with_id(student:Student, uid:string){
  this.firestore.collection("Students").doc("/"+uid).set(student);
 
}

public update_student_with_id(student:Student,uid:string){
  this.firestore.collection("Students").doc("/"+uid).update(student);
}



public read_zones(){
  return this.firestore.collection("ZoneTable");
}

public read_classrooms():AngularFirestoreCollection<Classroom>{
  return this.firestore.collection("ClassRooms");
}

public read_rooms(){
  
  return (this.firestore.collection("ClassRooms").snapshotChanges());
}



public async read_zone(uid:string):Promise<ZoneTable>{
  var finalZone:ZoneTable;
  var zonetable=this.firestore.doc<ZoneTable>("ZoneTable/"+uid);
  zonetable.snapshotChanges().subscribe(res=>{
finalZone={
  Seat1:res.payload.data().Seat1,
  Seat2:res.payload.data().Seat2,
  Seat3:res.payload.data().Seat3,
  Seat4:res.payload.data().Seat4,
  ClassroomID:res.payload.data().ClassroomID
  }});
  return finalZone;
}
}

