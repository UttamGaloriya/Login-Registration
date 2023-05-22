import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { userobj } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  //get data
  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL}/posts`)
  }
  getUserData(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/posts/${id}`)
  }
  //post data
  postData(data: userobj): Observable<any> {
    return this.http.post(`${this.baseURL}/posts`, data)
  }
  //update a data
  updateData(data: userobj, id: number): Observable<any> {
    return this.http.patch(`${this.baseURL}/posts/${id}`, data)
  }
  //delete a data
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/posts/${id}`)
  }

}
