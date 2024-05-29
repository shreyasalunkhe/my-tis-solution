import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { Observable, catchError,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[] = [
    // Full stack department
    new Employee('1', 'Alice', 'Full stack', 'Bob', 4.7, 'Excellent performance', 'Angular', 5, 20),
  new Employee('2', 'John', 'Full stack', 'Bob', 3.8, 'Good performance', 'React', 4, 15),
  new Employee('3', 'Mike', 'Full stack', 'Bob', 4.6, 'Very good performance', 'Node.js', 1, 18),
  new Employee('4', 'Sara', 'Full stack', 'Alice', 4.0, 'Good performance', 'TypeScript', 5, 20),
  new Employee('5', 'Tom', 'Full stack', 'Alice', 4.6, 'Excellent performance', 'JavaScript', 7, 22),
  new Employee('6', 'Lilly', 'Full stack', 'Alice', 3.9, 'Good performance', 'CSS', 3, 12),
  new Employee('7', 'Sam', 'Full stack', 'Bob', 4.1, 'Very good performance', 'HTML', 4, 16),
  new Employee('8', 'Rose', 'Full stack', 'Bob', 4.3, 'Very good performance', 'Express.js', 5, 18),
  new Employee('9', 'Chris', 'Full stack', 'Alice', 4.4, 'Very good performance', 'MongoDB', 1, 21),
  new Employee('10', 'Nina', 'Full stack', 'Alice', 3.7, 'Good performance', 'Webpack', 1, 15),

  // SAP department
  new Employee('11', 'Daniel', 'SAP', 'Emma', 4.6, 'Excellent performance', 'ABAP', 7, 22),
  new Employee('12', 'Laura', 'SAP', 'Emma', 3.8, 'Good performance', 'SAP Fiori', 4, 14),
  new Employee('13', 'James', 'SAP', 'Emma', 4.2, 'Very good performance', 'SAP HANA', 5, 19),
  new Employee('14', 'Sophia', 'SAP', 'Daniel', 4.0, 'Good performance', 'SAP Basis', 6, 20),
  new Employee('15', 'Robert', 'SAP', 'Daniel', 4.6, 'Excellent performance', 'SAP S/4HANA', 7, 22),
  new Employee('16', 'Maria', 'SAP', 'Daniel', 3.9, 'Good performance', 'SAP UI5', 1, 12),
  new Employee('17', 'David', 'SAP', 'Emma', 4.1, 'Very good performance', 'SAP BW', 4, 16),
  new Employee('18', 'Olivia', 'SAP', 'Emma', 4.3, 'Very good performance', 'SAP CRM', 5, 18),
  new Employee('19', 'Peter', 'SAP', 'Daniel', 4.4, 'Very good performance', 'SAP SCM', 6, 21),
  new Employee('20', 'Linda', 'SAP', 'Daniel', 3.7, 'Good performance', 'SAP MM', 1, 15),

  // Salesforce department
  new Employee('21', 'Paul', 'Salesforce', 'John', 4.6, 'Excellent performance', 'Apex', 1, 20),
  new Employee('22', 'Emily', 'Salesforce', 'John', 4.7, 'Good performance', 'Visualforce', 6, 22),
  new Employee('23', 'George', 'Salesforce', 'John', 4.2, 'Very good performance', 'Salesforce Lightning', 4, 18),
  new Employee('24', 'Anna', 'Salesforce', 'Paul', 4.0, 'Good performance', 'SOQL', 1, 17),
  new Employee('25', 'Henry', 'Salesforce', 'Paul', 4.6, 'Excellent performance', 'Salesforce Integration', 5, 21),
  new Employee('26', 'Grace', 'Salesforce', 'Paul', 3.9, 'Good performance', 'Salesforce Administration', 2, 13),
  new Employee('27', 'Edward', 'Salesforce', 'John', 4.1, 'Very good performance', 'Salesforce Marketing Cloud', 4, 18),
  new Employee('28', 'Eva', 'Salesforce', 'John', 4.3, 'Very good performance', 'Salesforce Service Cloud', 5, 19),
  new Employee('29', 'Kevin', 'Salesforce', 'Paul', 4.6, 'Very good performance', 'Salesforce Community Cloud', 6, 20),
  new Employee('30', 'Laura', 'Salesforce', 'Paul', 3.7, 'Good performance', 'Salesforce Einstein', 3, 14),

  // Finance department
  new Employee('31', 'David', 'Finance', 'Alice', 4.5, 'Excellent performance', 'Financial Analysis', 5, 22),
  new Employee('32', 'Susan', 'Finance', 'Alice', 3.8, 'Good performance', 'Budgeting', 3, 14),
  new Employee('33', 'John', 'Finance', 'Bob', 4.2, 'Very good performance', 'Risk Management', 1, 18),
  new Employee('34', 'Betty', 'Finance', 'Bob', 4.0, 'Good performance', 'Auditing', 1, 20),
  new Employee('35', 'Charles', 'Finance', 'Alice', 4.6, 'Excellent performance', 'Tax Planning', 6, 21),
  new Employee('36', 'Diana', 'Finance', 'Alice', 3.9, 'Good performance', 'Financial Reporting', 3, 15),
  new Employee('37', 'Edward', 'Finance', 'Bob', 4.8, 'Very good performance', 'Investment Strategies', 7, 23),
  new Employee('38', 'Fiona', 'Finance', 'Bob', 4.8, 'Very good performance', 'Cost Control', 6, 22),
  new Employee('39', 'George', 'Finance', 'Alice', 4.7, 'Very good performance', 'Cash Flow Management', 5, 20),
  new Employee('40', 'Helen', 'Finance', 'Bob', 3.7, 'Good performance', 'Financial Modeling', 3, 14)
  ];


  constructor() { }

  getHighRatingEmployeesByRatings(department :string): Employee[] {
    return this.employees.filter(v =>v.department === department && v.rating > 4.5);
  }

  getEmployeeDetailsById(id:string):Observable<Employee[]>{
    const filteredEmployees = this.employees.filter(employee => employee.id === id);
    return of(filteredEmployees);
  }

  getEmployee(){
    return this.employees;
  }

  getEmployeeByDepartmentExp(department:string){
    return this.employees.filter(v =>v.department === department && v.experience >1);
  }

  getEmployeeByDepartmentFr(department:string){
    return this.employees.filter(v =>v.department === department && v.experience <= 1);
  }


}
