import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "../modules/task";
import {HttpClient} from "@angular/common/http";
import {Steps} from "../modules/steps";

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  private apiUrl = 'http://localhost:8080/step/';
  constructor(private http: HttpClient) { }

  getSteps(taskId: BigInt | undefined): Observable<Array<Steps>>{
    return this.http.get<Array<Steps>>('http://localhost:8080/step/getAll/'+taskId);
  }
}
