// transaction.ts
export class Transaction {
    constructor(
      public department: string,
      public technology: string,
      public quarter: string,
      public transactionCount: number,
      public orderValueVolume: number,
      public transactionType:string
    ) {}
  }
  