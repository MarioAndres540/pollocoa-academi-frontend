import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
   private router = inject(Router)
user = JSON.parse(sessionStorage.getItem('user') || '{}');

 logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }


}
