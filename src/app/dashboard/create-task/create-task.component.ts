import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Task } from '../../Model/Task';


@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  @Input()
  isEditMode: boolean = false;


  @Input() selectedTask: any = Task;

  @ViewChild('taskForm')
  taskForm!: NgForm;

  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();


  @Output()
  EmitTaskdata: EventEmitter<Task> = new EventEmitter<Task>();


  ngAfterViewInit() {
    setTimeout(() => {
      this.taskForm.setValue(this.selectedTask);

    }, 0);


  }



  OnCloseForm() {
    this.CloseForm.emit(false);
  }

  OnFormSubmitted(form: NgForm) {
    this.EmitTaskdata.emit(form.value);
    this.CloseForm.emit(false)

  }
}