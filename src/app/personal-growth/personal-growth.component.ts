import { Component } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-presonal-growth',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './personal-growth.component.html',
  styleUrl: './personal-growth.component.css'
})
export class PresonalGrowthComponent {
      employee :Employee[] = [];
      model = new Employee('','','','',1,'','',0,0);
      submitted = false;
      constructor( private employeeService:EmployeeService){}

      onSubmit(){
        if(this.model.id === "1" && this.model.rating == 123){
              this.employeeService.getEmployeeDetailsById(this.model.id).subscribe(empDet =>this.employee = empDet);
              this.submitted = true;
        }
        
      }

}
