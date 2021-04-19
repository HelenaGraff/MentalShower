import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Student } from './student';
import {MySqlClassroom} from './my-sql-classroom';
import {MySqlZone} from './my-sql-zone';

@Injectable({
  providedIn: 'root'
})
export class MySqlServiceService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'})
  };

  constructor(private http: HttpClient) {


   }

   getAllMySqlClassrooms():Observable<MySqlClassroom[]>{
    return this.http.get<MySqlClassroom[]>('http://localhost:8080/api/classrooms')
    .pipe(
      tap(Classroom => console.log('Classrooms fetched!')),
      catchError(this.handleError<MySqlClassroom[]>('Get classrooms', []))
    );
    

  }

  getMySqlZonesWithId(classroomId:number):Observable<MySqlZone[]>{
    return this.http.get<MySqlZone[]>('http://localhost:8080/api/zones/classroomId/'+classroomId)
    .pipe(
      tap(Zone => console.log('Zones fetched!')),
      catchError(this.handleError<MySqlZone[]>('Get zones', []))
    );
    

  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}




