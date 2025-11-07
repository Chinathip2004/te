import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import {  Router, RouterModule } from '@angular/router';
import { Process } from '../../models/process';
import { ProcessService } from '../../domain/process.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  processForm!: FormGroup;
 
  
  constructor(
    private ProcessService: ProcessService,
    private router: Router,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
      this.processForm = this.fb.group({
        process:this.fb.array([]),
        name: ['',Validators.required],
        weight:['',Validators.required],
        inver: this.fb.array([])

      });
  }

  addProcess(){
    
  }
}
