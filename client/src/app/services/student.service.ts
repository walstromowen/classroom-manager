import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private webRequestService: WebRequestService) {}

  displayClass(){
    return this.webRequestService.get('student/get-all/')
  }

  addStudent(firstname: string){
    return this.webRequestService.post('student/add/', {firstname})
  }

}
