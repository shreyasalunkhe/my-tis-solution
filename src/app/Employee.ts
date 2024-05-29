export class Employee{
    constructor(
        public id:string,
        public name:string,
        public department:string,
        public manager:string,
        public rating:number,
        public feedback:string,
        public skillsToImprove:string,
        public experience:number,
        public transactionCount:number,

    ){ }
}