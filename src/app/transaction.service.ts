import { Injectable } from '@angular/core';
import { Transaction } from './Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions: Transaction[] = [
    // Full Stack Department
    new Transaction('Full Stack', 'Angular', 'Q1-2024', 150, 300000, 'Cloud'),
    new Transaction('Full Stack', 'React', 'Q1-2024', 200, 450000, 'On-premise'),
    new Transaction('Full Stack', 'Vue.js', 'Q1-2024', 140, 280000, 'Cloud'),
    new Transaction('Full Stack', 'Angular', 'Q2-2024', 170, 350000, 'Cloud'),
    new Transaction('Full Stack', 'React', 'Q2-2024', 220, 500000, 'On-premise'),
    new Transaction('Full Stack', 'Vue.js', 'Q2-2024', 140, 280000, 'Cloud'),
    new Transaction('Full Stack', 'Angular', 'Q3-2024', 160, 320000, 'Cloud'),
    new Transaction('Full Stack', 'React', 'Q3-2024', 210, 480000, 'On-premise'),
    new Transaction('Full Stack', 'Vue.js', 'Q3-2024', 130, 260000, 'Cloud'),
    new Transaction('Full Stack', 'Angular', 'Q4-2024', 180, 360000, 'Cloud'),

    // SAP Department
    new Transaction('SAP', 'SAP HANA', 'Q1-2024', 100, 200000, 'On-premise'),
    new Transaction('SAP', 'SAP Fiori', 'Q1-2024', 120, 240000, 'Cloud'),
    new Transaction('SAP', 'SAP BW', 'Q1-2024', 110, 220000, 'On-premise'),
    new Transaction('SAP', 'SAP HANA', 'Q2-2024', 110, 220000, 'On-premise'),
    new Transaction('SAP', 'SAP Fiori', 'Q2-2024', 130, 260000, 'Cloud'),
    new Transaction('SAP', 'SAP BW', 'Q2-2024', 120, 240000, 'On-premise'),
    new Transaction('SAP', 'SAP HANA', 'Q3-2024', 105, 210000, 'On-premise'),
    new Transaction('SAP', 'SAP Fiori', 'Q3-2024', 125, 250000, 'Cloud'),
    new Transaction('SAP', 'SAP BW', 'Q3-2024', 115, 230000, 'On-premise'),
    new Transaction('SAP', 'SAP HANA', 'Q4-2024', 115, 230000, 'On-premise'),

    // Salesforce Department
    new Transaction('Salesforce', 'Sales Cloud', 'Q1-2024', 180, 360000, 'Cloud'),
    new Transaction('Salesforce', 'Service Cloud', 'Q1-2024', 150, 300000, 'On-premise'),
    new Transaction('Salesforce', 'Marketing Cloud', 'Q1-2024', 170, 340000, 'Cloud'),
    new Transaction('Salesforce', 'Sales Cloud', 'Q2-2024', 190, 380000, 'Cloud'),
    new Transaction('Salesforce', 'Service Cloud', 'Q2-2024', 160, 320000, 'On-premise'),
    new Transaction('Salesforce', 'Marketing Cloud', 'Q2-2024', 180, 360000, 'Cloud'),
    new Transaction('Salesforce', 'Sales Cloud', 'Q3-2024', 185, 370000, 'Cloud'),
    new Transaction('Salesforce', 'Service Cloud', 'Q3-2024', 155, 310000, 'On-premise'),
    new Transaction('Salesforce', 'Marketing Cloud', 'Q3-2024', 175, 350000, 'Cloud'),
    new Transaction('Salesforce', 'Sales Cloud', 'Q4-2024', 195, 390000, 'Cloud'),

    // Finance Department
    new Transaction('Finance', 'Oracle Financials', 'Q1-2024', 130, 260000, 'On-premise'),
    new Transaction('Finance', 'SAP FI', 'Q1-2024', 140, 280000, 'Cloud'),
    new Transaction('Finance', 'Oracle ERP', 'Q1-2024', 135, 270000, 'On-premise'),
    new Transaction('Finance', 'Oracle Financials', 'Q2-2024', 135, 270000, 'On-premise'),
    new Transaction('Finance', 'SAP FI', 'Q2-2024', 145, 290000, 'Cloud'),
    new Transaction('Finance', 'Oracle ERP', 'Q2-2024', 140, 280000, 'On-premise'),
    new Transaction('Finance', 'Oracle Financials', 'Q3-2024', 125, 250000, 'On-premise'),
    new Transaction('Finance', 'SAP FI', 'Q3-2024', 155, 310000, 'Cloud'),
    new Transaction('Finance', 'Oracle ERP', 'Q3-2024', 130, 260000, 'On-premise'),
    new Transaction('Finance', 'Oracle Financials', 'Q4-2024', 140, 280000, 'On-premise')
  ];

  constructor() { }

  getQuarterlyWiseTransaction(department:string,quarter:string):Transaction[]{
    return this.transactions.filter(v=>v.department === department && v.quarter === quarter);
  }

  calculateProfitPercentageByDepartmentAndTransactionType(department: string, transactionType: string): number {
    const filteredTransactions = this.transactions.filter(transaction =>
        transaction.department === department && transaction.transactionType === transactionType
    );
    const totalOrderValue = filteredTransactions.reduce((total, transaction) => total + transaction.orderValueVolume, 0);
    const totalCost = this.calculateTotalCostForDepartment(department);
    const profit = totalOrderValue - totalCost;
    const profitPercentage = (profit / totalCost) * 100;
    return profitPercentage;
}
private calculateTotalCostForDepartment(department: string): number {
    // You need to define your own logic to calculate the total cost for each department
    // This could involve various expenses like operational costs, salaries, etc.
    // For simplicity, let's assume a fixed cost of 70% of revenue for each department
    // Modify this function according to your actual cost calculation logic
    return 0.7 * this.transactions.reduce((total, transaction) => {
        if (transaction.department === department) {
            return total + transaction.orderValueVolume;
        }
        return total;
    }, 0);
}

}
