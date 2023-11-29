import { Component, Input, OnInit } from '@angular/core';
import { TruncatePipe } from '../pipes/truncate.pipe';
@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.scss']
})
export class JobcardComponent implements OnInit {
  @Input() jobPostData: any;

  createdAt: Date = new Date(); // Assign your createdAt date here

  daysAgo: string = '';
  isDaysAgo = false;
  ngOnInit() {
    // Calculate the difference in days between createdAt and current date
    const currentDate = new Date();
    const createdAtDate = new Date(this.jobPostData?.createdat);

    const timeDifferenceMinutes = Math.floor((currentDate.getTime() - createdAtDate.getTime()) / (1000 * 60));
    const timeDifferenceHours = Math.floor(timeDifferenceMinutes / 60);
    const timeDifferenceDays = Math.floor(timeDifferenceHours / 24);

    // const timeDifference = currentDate.getTime() - createdAtDate.getTime();
    // let days = Math.floor(timeDifferenceDays / (1000 * 3600 * 24));

    if (timeDifferenceDays > 0) {
      this.isDaysAgo = true;
      this.daysAgo = `${timeDifferenceDays} day${timeDifferenceDays > 1 ? 's' : ''} ago`;
    } else if (timeDifferenceHours > 0) {
      this.daysAgo = `${timeDifferenceHours} hour${timeDifferenceHours > 1 ? 's' : ''} ago`;
    } else {
      this.daysAgo = `${timeDifferenceMinutes} minute${timeDifferenceMinutes > 1 ? 's' : ''} ago`;
    }
  }

}
