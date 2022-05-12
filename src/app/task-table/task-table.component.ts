import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { TaskService } from '../service/task.service';
import { Task } from '../model/Task';
import { PageResponse } from '../model/PageResponse';
import { TaskResponse } from '../model/TaskResponse';

import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'description', 'dueDate', 'completed'];
  dataSource = new MatTableDataSource<Task>();
  selection = new SelectionModel<Task>(true, []);

  tasks: Task[];
  taskresponse: TaskResponse;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.showTasks();
    console.log("Paged response was set", this.taskresponse);
  }
  title = 'paginator';

  async showTasks() {
    this.taskService.getTasks()
      .subscribe((data: TaskResponse) => { 
        this.taskresponse = data;
        
        this.tasks = this.taskresponse.tasks.content;
        console.log(this.taskresponse.tasks.content);
        this.dataSource.data = this.tasks;
        this.dataSource.paginator = this.paginator;
      });
  }
}

