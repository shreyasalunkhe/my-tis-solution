import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../Transaction';
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-compare',
  standalone: true,
  imports: [NgIf,FormsModule,CommonModule,HeaderComponent,FooterComponent],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.css'
})

export class CompareComponent implements OnInit, AfterViewInit {
  cloudProfitPercentages: { [key: string]: number } = {};
  onPremiseProfitPercentages: { [key: string]: number } = {};
  selectedDepartment='';
  departmentsList = ['Full Stack', 'SAP', 'Salesforce', 'Finance'];
  model = new Transaction('','','',0,0,'');
  pie=false;
  constructor(private transactionService: TransactionService) { 
    // Initialize properties here
    this.cloudProfitPercentages = {};
    this.onPremiseProfitPercentages = {};
  }

  ngOnInit(): void {
    this.calculateProfitPercentages();
  }

  ngAfterViewInit(): void {
    this.createPieCharts(); // Corrected method name
  }

  calculateProfitPercentages() {
    const departments = ['Full Stack', 'SAP', 'Salesforce', 'Finance'];
    departments.forEach(department => {
      this.cloudProfitPercentages[department] = this.transactionService.calculateProfitPercentageByDepartmentAndTransactionType(department, 'Cloud');
      this.onPremiseProfitPercentages[department] = this.transactionService.calculateProfitPercentageByDepartmentAndTransactionType(department, 'On-premise');
    });
  }

  createPieCharts() {
    const canvas = document.getElementById('pieChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    // Check if context is null
    if (!ctx) {
      console.error('Canvas context is null');
      return;
    }

    const selectedDepartment = this.model.department; // Use selectedDepartment property

    const data = [this.cloudProfitPercentages[selectedDepartment], this.onPremiseProfitPercentages[selectedDepartment]];
    const labels = ['Cloud', 'On-Premises']; // Transaction type names
    const colors = ['#36a2eb', '#ff6384']; // Example colors
    const total = data.reduce((acc, curr) => acc + (curr || 0), 0); // Ensure curr is defined

    let startAngle = -Math.PI / 2;
    for (let i = 0; i < data.length; i++) {
      const sliceAngle = (Math.PI * 2 * (data[i] || 0)) / total; // Ensure data[i] is defined
      const sliceMidAngle = startAngle + sliceAngle / 2;
      const labelX = canvas.width / 2 + Math.cos(sliceMidAngle) * (canvas.width / 3);
      const labelY = canvas.height / 2 + Math.sin(sliceMidAngle) * (canvas.height / 3);

      ctx.fillStyle = colors[i];
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(`${labels[i]}: ${((data[i] || 0) / total * 100).toFixed(2)}%`, labelX, labelY); // Ensure data[i] is defined

      startAngle += sliceAngle;
    }

    for (let i = 0; i < data.length; i++) {
      const label = labels[i];
      const color = colors[i];
      const legendItem = document.createElement('div');
      legendItem.innerHTML = `<span style="display:inline-block;width:20px;height:20px;background-color:${color}"></span> ${label}`;
      document.getElementById('legend')!.appendChild(legendItem);
    }
  }

  // onDepartmentChange(event: Event): void {
  //  // const target = event.target as HTMLSelectElement;
  //    console.log(event);
  //   //this.selectedDepartment = target.value;
  //   // this.selectedDepartment = event;
  //   this.createPieCharts();// Call createPieCharts method when department changes
  // }

  onSubmit(){

    this.selectedDepartment = this.model.department;
    this.createPieCharts();
    this.pie = true;

  }
}
