import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobmodalComponent } from '../jobmodal/jobmodal.component';
@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.scss']
})
export class JobPageComponent {
  constructor(private dialog: MatDialog){

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
