import { Component, OnInit } from '@angular/core';
import { RecruiterService } from '../services/recruiter.service';
import {
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-jobmodal',
  templateUrl: './jobmodal.component.html',
  styleUrls: ['./jobmodal.component.scss'],
  providers:[RecruiterService]
})
export class JobmodalComponent implements OnInit {

  qualifications: any;
  jobTypes: any;
  category: any;

  constructor(private recruiterService: RecruiterService, private dialog: MatDialog){}


  jobVacencyForm = new FormGroup({
    companyName: new FormControl('',[Validators.required]),
    companyWebsite: new FormControl('',[Validators.required]),
    jobTitle: new FormControl('',[Validators.required]),
    jobCategory: new FormControl('',[Validators.required]),
    jobType: new FormControl('',[Validators.required]),
    jobLocation: new FormControl('',[Validators.required]),
    salaryRange: new FormControl('',[Validators.required]),
    experience: new FormControl('',[Validators.required]),
    qualification: new FormControl('',[Validators.required]),
    applicationDeadline: new FormControl('',[Validators.required]),
    jobDescription: new FormControl('',[Validators.required]),
  });


  jobVacencySubmit() {
    console.log(this.jobVacencyForm.value);
    this.recruiterService.jobPosting(this.jobVacencyForm.value).subscribe(
      (res)=>{
        console.log("successfully got response");
        
        console.log(res);
      }
    )

    this.dialog.closeAll();
    
  }

  // get qualifications list
  getQualificationList() {

    this.recruiterService.qualifications().subscribe(
      (res)=>{
        console.log("Inside the qualifications.");
        this.qualifications = res?.data;
        console.log(this.qualifications);
      }
    )
    
  }
  // get category on which job falls list
  getCategory() {

    this.recruiterService.jobCategory().subscribe(
      (res)=>{
        console.log("Inside the category.");
        this.category = res?.data;
        console.log(this.category);
      }
    )
    
  }
  // get type of job list
  getJobType() {

    this.recruiterService.jobTypes().subscribe(
      (res)=>{
        console.log("Inside the job type.");
        this.jobTypes = res?.data;
        console.log(this.jobTypes);
      }
    )
    
  }

  ngOnInit(): void {
    this.getJobType();
    this.getCategory();
    this.getQualificationList();
  }
}
