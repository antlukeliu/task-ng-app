import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PageResponse } from '../model/PageResponse';
import { TaskResponse } from '../model/TaskResponse';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
  
    constructor(private http: HttpClient) { }
    taskUrl = 'http://localhost:8088/api/task'

    getTasks() {
        return this.http.get<TaskResponse>(this.taskUrl);
    }
}