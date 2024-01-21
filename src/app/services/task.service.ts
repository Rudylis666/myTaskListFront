import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../modules/task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/';


  constructor(private http: HttpClient) { }
  getTasks(): Observable<Array<Task>>{
    return this.http.get<Array<Task>>('${this.apiUrl}getAll/');
  }
}
