import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Taula } from "./taula/taula";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [Navbar, Taula, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_ariketa');
}
