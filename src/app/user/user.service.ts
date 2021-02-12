import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:8080/';  
  private titleUrl = 'http://localhost:8080/title';
  // private usersUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
     })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+"users")
      .pipe(
        tap(users => console.log('fetched Users')),
        catchError(this.handleError<User[]>('getUsers', [])));
  }

  public getUser(userId:number):Observable<User> {
    return this.http.get<User>(this.usersUrl+"users/"+userId)
      .pipe(
        tap( user => console.log("user data")) ,
        catchError(this.handleError<User>('getUser', )));
  }

  public saveUser(user:User):Observable<User> {
    return this.http.post<User>(this.usersUrl+"saveUser",user,this.httpOptions)
    .pipe(
      catchError(this.handleError('addUser', user))
    );
      
  }

  public updateUser(user:User):Observable<User> {
    return this.http.post<User>(this.usersUrl+"updateUser",user,this.httpOptions)
    .pipe(
      catchError(this.handleError('addUser', user))
    );
      
  }

  public deleteUser(userId:number):Observable<any> {
    return this.http.delete<number>(this.usersUrl+"users/"+userId)
    .pipe(
      catchError(this.handleError('deleteUser', ))
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
