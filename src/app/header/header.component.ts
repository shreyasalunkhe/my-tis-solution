import { Component } from '@angular/core';
import { RouterOutlet,RouterLinkActive } from '@angular/router';
import { TransactionComponent } from '../transaction/transaction.component';
import { RouterLink, } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  

}
