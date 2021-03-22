import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
 ProfilePicURL:ref.payload.data().ProfilePicURL
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
  this.firestore.collection("Students").doc(uid).set(student);
}

public read_zones():AngularFirestoreCollection<ZoneTable>{
  return this.firestore.collection("ZoneTable");
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

