import { Component,} from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {

  constructor(public studentService: StudentService){}

  displayClass(){
    this.studentService.displayClass().subscribe((response: any)=>{
      alert(response)
    })
  }


  addStudent(){
    this.studentService.addStudent('testing').subscribe((response: any)=>{
      console.log(response)
    })
  }
}
