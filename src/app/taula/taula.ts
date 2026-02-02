import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../API/api';

@Component({
  selector: 'app-taula',
  templateUrl: './taula.html',
  styleUrl: './taula.css',
})
export class Taula implements OnInit {
  private route = inject(ActivatedRoute);
  private api = inject(Api);

  // events: any[] = [];

  events = signal<any[]>([]);

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const typeName = params.get('type');
      if (typeName) {
        this.api.page = 1; // reset page for each type

        this.api.get_events(typeName).subscribe(response => {
          // handle API response
          console.log('API response:', response); // debug log
          this.events.set(response.items); // assign events array using signal
        });
      }
    });
  }
}
