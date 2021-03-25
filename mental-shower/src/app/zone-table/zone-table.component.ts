import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Student } from '../student';

@Component({
  selector: 'app-zone-table',
  templateUrl: './zone-table.component.html',
  styleUrls: ['./zone-table.component.scss'],
})
export class ZoneTableComponent implements OnInit {
  @Input("matchPercent") matchPercent;
  @Input("avatar1url") avatar1url;
  @Input("avatar2url") avatar2url;
  @Input("avatar3url") avatar3url;
  @Input("avatar4url") avatar4url;
 
  @Input("student1id") student1id;
  @Input("student2id") student2id;
  @Input("student3id") student3id;
  @Input("student4id") student4id;

  constructor(public firebaseService:FirebaseService) {

    this.avatar1url="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
    this.avatar2url="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
    this.avatar3url="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
    this.avatar4url="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";



   }
students:Student[];
  ngOnInit() {
    this.firebaseService.read_students().snapshotChanges().subscribe(res=>{
      this.students=res.map(r=>{
        return{
          id:r.payload.doc.id,
          ...r.payload.doc.data() as Student
        } 
      })

      this.students.forEach(i=>{
        if (i.id==this.student1id){
          this.avatar1url=i.ProfilePicURL;
        }
        if (i.id==this.student2id){
          this.avatar2url=i.ProfilePicURL;
        }
        if (i.id==this.student3id){
          this.avatar3url=i.ProfilePicURL;
        }
        if (i.id==this.student4id){
          this.avatar4url=i.ProfilePicURL;
        }
      })
    }
    
    )

    
    
  }

}
