import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template : `
    <h1 [class] = "'headerColor'">
      Marvellous Infosystems
    </h1>
    <input>
  `,
  // templateUrl: './app.component.html',
  styles : [`
    .headerColor { 
      color : blue 
    }
  `]    
})
export class AppComponent {
  title = 'Problem3';
}
