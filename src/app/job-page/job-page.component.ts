import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobmodalComponent } from '../jobmodal/jobmodal.component';
import { RecruiterService } from '../services/recruiter.service';
@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.scss']
})
export class JobPageComponent implements OnInit{
  jobs: any[] = []
  constructor(private dialog: MatDialog, private recruiterService: RecruiterService){

  }
  ngOnInit(): void {
    this.recruiterService.getAllJobPosts().subscribe(
      (res)=>{
        this.jobs = res.data
        console.log(this.jobs)
      }
    )
    // throw new Error('Method not implemented.');
  }

  openDialog(entryTimeAnimation: string){
    const dialogRef = this.dialog.open(JobmodalComponent,{
      width:'500px',
      enterAnimationDuration: entryTimeAnimation
    });

    dialogRef.afterClosed().subscribe(result =>{
      console.log("Form Closed.")
    })
  };



}
