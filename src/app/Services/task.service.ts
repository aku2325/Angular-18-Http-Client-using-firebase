import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Model/Task';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  http: HttpClient = inject(HttpClient)

  constructor() { }


  CreateTask(task: Task) {

    const headers = new HttpHeaders({ 'my-header': 'hello-world' })

    this.http.post<{ name: string }>(
      'https://angularhttpclient-66369-default-rtdb.firebaseio.com/tasks.json',
      task, { headers: headers }).subscribe((response) => {
        console.log(response);
        // this.fetchAllTasks();

      });

  }

  DeleteTask(id: string | undefined) {

    this.http.delete('https://angularhttpclient-66369-default-rtdb.firebaseio.com/tasks/' + id + '.json').subscribe((res) => {
      // this.fetchAllTasks();
    });
  }


  DeleteAllTask() {
    this.http.delete('https://angularhttpclient-66369-default-rtdb.firebaseio.com/tasks.json').subscribe(() => {
      // this.fetchAllTasks();
    });

  }


  GetAllTask() {


    return this.http.get<{ [key: string]: Task }>('https://angularhttpclient-66369-default-rtdb.firebaseio.com/tasks.json')

      .pipe(map((response) => {
        //transform data
        let tasks = [];

        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            tasks.push({ ...response[key], id: key });
          }

        }
        return tasks;

      }))

  

  }


}

