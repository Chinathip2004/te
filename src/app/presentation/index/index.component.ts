import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Process } from '../../models/process';
import { ProcessService } from '../../domain/process.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
    processes: Process[] = [];

  constructor(private ProcessService: ProcessService, private router: Router){}
 
  ngOnInit() {
      this.loadProcess();
  }

  loadProcess(){
    this.ProcessService.getAll().subscribe(processes => {
      this.processes = processes;
      console.log(this.processes)
    })
  }
  // goToCreate() {
  //   this.router.navigate(['process/create'])
  // }
  addprocess(){
    this.processes.push(new Process())
  }
  deleteProcess(process: Process){
    this.processes = this.processes.filter(p => p !== process)
  }
  AddTopic(process: Process){
    process.inverseHeader.push(new Process())
  }
  deletetopic(process: Process, topic: Process){
    process.inverseHeader = process.inverseHeader.filter(p => p !== topic)
  }
  Addsubtopic(topic: Process){
    topic.inverseHeader.push(new Process())
  }
  deleteSubtopic(topic: Process, subtopic: Process){
    topic.inverseHeader = topic.inverseHeader.filter(p => p !== subtopic)
  }
  onSave(){
    this.ProcessService.saveProcess(this.processes).subscribe(
      (res) => {
        console.log(res);
      },
      (err) =>{
        console.error(err);
        
      }
    )
  }
}
