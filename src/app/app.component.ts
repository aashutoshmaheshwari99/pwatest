import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pwatest';
  constructor(private apiService: TestService) {}

  submit(): void {
    const payload = {
      Code: 'rc001',
      CurrentDateTime: '2024-11-22 13:39:49'
    };

    this.apiService.verifyClinicByQrCode(payload).subscribe({
      next: (response) => {
        console.log('API Response:', response);
      },
      error: (error) => {
        console.error('API Error:', error);
      }
    });
  }
}
