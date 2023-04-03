import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-your-pik',
  templateUrl: './add-your-pik.component.html',
  styleUrls: ['./add-your-pik.component.scss'],
})
export class AddYourPikComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigateByUrl('/');
  }
}
