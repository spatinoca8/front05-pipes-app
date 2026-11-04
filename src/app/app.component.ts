import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavarComponent } from './components/navar/navar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes-app';
}
