import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get('https://dummyjson.com/users').pipe(map((x:any)=> {return x.users}))
  }
  getUserById(id:number):Observable<any>{
    return this.http.get(`https://dummyjson.com/users/${id}`)
  }
}
