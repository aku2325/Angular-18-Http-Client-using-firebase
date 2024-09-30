import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateTaskComponent } from "./create-task/create-task.component";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Model/Task';

import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule, CreateTaskComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  showCreateTaskForm: boolean = false;

  http: HttpClient = inject(HttpClient)
  allTasks: Task[] = [];
  taskService: TaskService = inject(TaskService)

  editMode: boolean = false;
  selectedTask: Task | undefined;


  ngOnInit() {
    this.fetchAllTasks();

  }

  OpenCreateTaskForm() {
    this.showCreateTaskForm = true;
    this.editMode = false;
    this.selectedTask = { title: '', desc: '', assignedTo: '', createdAt: '', priority: '', status: '' }
  }

  CloseCreateTaskForm() {
    this.showCreateTaskForm = false;
  }

  CreateTask(data: Task) {

    this.taskService.CreateTask(data);



  }


  FetchAllTaskClicked() {

    this.fetchAllTasks();

  }


  private fetchAllTasks() {

    this.taskService.GetAllTask().subscribe((tasks) => {
      this.allTasks = tasks

    })
  }




  DeleteTask(id: string | undefined) {

    this.taskService.DeleteTask(id)
  }




  DeleteAllTaskClicked() {
    this.taskService.DeleteAllTask()

  }


  OnEditTaskClicked(id: string | undefined) {
    // Open Edit Task Form
    this.showCreateTaskForm = true;
    this.editMode = true;

    this.selectedTask = this.allTasks.find((task) => { return task.id === id})
  }

}