import { Component } from '@angular/core';

import {
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-jobmodal',
  templateUrl: './jobmodal.component.html',
  styleUrls: ['./jobmodal.component.scss']
})
export class JobmodalComponent {

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
    console.log(this.jobVacencyForm.value)
  }
}
