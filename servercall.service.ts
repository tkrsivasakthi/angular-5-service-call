import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ServercallService {

  constructor(private http:HttpClient) { }

  private url='https://jsonplaceholder.typicode.com/posts';
  getUser(): Observable<User[]>
  {
    return this.http.get<User[]>(this.url)
    .catch(this.errorHandler);

  /* return [
    {
        "id": 4,
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    },
    {
        "id": 5,
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    },
    {
        "id": 6,
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    }
] */
}
  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
}

}
