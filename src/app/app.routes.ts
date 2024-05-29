import { Routes } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PresonalGrowthComponent } from './personal-growth/personal-growth.component';
import { RatingsComponent } from './ratings/ratings.component';
import { CompareComponent } from './compare/compare.component';
import { ManagerComponent } from './manager/manager.component';

export const routes: Routes = [
    {path:'transaction', component:TransactionComponent},
    {path:'',component:DashboardComponent},
    {path:'personal-growth',component:PresonalGrowthComponent},
    {path:'ratings',component:ManagerComponent},
    {path:'compare',component:CompareComponent}
];
