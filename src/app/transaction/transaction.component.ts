import { Component } from '@angular/core';
import { Transaction } from '../Transaction';
import { TransactionService } from '../transaction.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  departments = ['Full Stack', 'SAP', 'Salesforce', 'Finance'];
  quarters = ['Q1-2024', 'Q2-2024', 'Q3-2024', 'Q4-2024'];
  model = new Transaction('','','',0,0,'');
  submitted = false;
  transactionSpec:Transaction[] = [];
  transactionCountTotal = 0;
  orderVolumeCountTotal = 0;

  
  // transactions: { [key: string]: { [key: string]: Transaction[] } } = {};
  // totals: { [key: string]: { [key: string]: { transactionCount: number, orderValueVolume: number } } } = {};
 
  constructor(private transactionService: TransactionService) {}

  onSubmit(){
      const transactionSpec =this.transactionService.getQuarterlyWiseTransaction(this.model.department,this.model.quarter);
      this.submitted = true;
      this.calculateTotals(transactionSpec);
  }

  calculateTotals(trans:Transaction[]){
    for(let num of trans){
      this.transactionCountTotal += num.transactionCount;
      this.orderVolumeCountTotal += num.orderValueVolume;
    }

  }

  // ngOnInit() {
  //   this.departments.forEach(department => {
  //     this.transactions[department] = {};
  //     this.totals[department] = {};

  //     this.quarters.forEach(quarter => {
  //       const transactions = this.transactionService.getQuarterlyWiseTransaction(department, quarter);
  //     });
      
  //     this.calculateTotals(department);
  //   });
   
  // }


  // calculateTotals(department: string): void {
  //   this.quarters.forEach(quarter => {
  //     const transactions = this.transactions[department][quarter];
  //     const total = this.calculateQuarterTotal(transactions);
  //     this.totals[department][quarter] = total;
  //   });
  // }


  

  // calculateQuarterTotal(transactions: Transaction[]): { transactionCount: number, orderValueVolume: number } {
  //   const transactionCount = transactions.reduce((sum, transaction) => sum + transaction.transactionCount, 0);
  //   const orderValueVolume = transactions.reduce((sum, transaction) => sum + transaction.orderValueVolume, 0);
  //   return { transactionCount, orderValueVolume };
  // }

 
}
