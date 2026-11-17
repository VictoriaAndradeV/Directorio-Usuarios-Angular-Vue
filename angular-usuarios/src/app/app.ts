import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  userService = inject(UserService);
}
