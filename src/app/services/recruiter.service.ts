import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  constructor(private http: HttpClient) {}

  // update all jobPosting
  jobPosting(req: any){
    return this.http.post(`${environment.baseUrl}/api/jobPost`,req)
  }
  
  jobCategory(){
    return this.http.get<any>(`${environment.baseUrl}/api/jobCategory`)
  }

  qualifications(){
    return this.http.get<any>(`${environment.baseUrl}/api/qualifications`)
  }

  jobTypes(){
    return this.http.get<any>(`${environment.baseUrl}/api/jobTypes`)
  }

}
