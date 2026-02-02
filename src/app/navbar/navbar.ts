import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
@Injectable({  providedIn: 'root'
})
export class Navbar {
  @Input() navParametro =true;
  nav_items:{id: Number; name: string; route: string}[]=[
    {id:1, name:'Kontzertuak', route: '/kontzertuak'},
    {id:2, name:'Erakusketa', route: '/erakusketa'},
    {id:3, name:'Dantza', route: '/dantza'}
  ]
}