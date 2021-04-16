import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Student } from './student';

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
      tap(Student => console.log('Classrooms fetched!')),
      catchError(this.handleError<MySqlClassroom[]>('Get classrooms', []))
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



export class MySqlClassroom{
id:number;
classroomName:string;
courseName:String
}
