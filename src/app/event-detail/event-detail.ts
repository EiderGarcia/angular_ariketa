import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../API/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
})
export class EventDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private api = inject(Api);

  event = signal<any | null>(null);
  // event: any | null = null;

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    console.log('EVENT ID FROM ROUTE:', id);

    if (!id) return;

    this.event.set(null); // reset so loading shows properly

    this.api.get_event_by_id(id).subscribe(data => {
  this.event.set(data);
});
  });
  //   const id = this.route.snapshot.paramMap.get('id');
  // console.log('EVENT ID FROM ROUTE:', id);
  
  // if (!id) {
  //   console.error('No event ID in route');
  //   return;
  // }
  //   this.api.get_event_by_id(id!).subscribe(data => {
  //     console.log('EVENT DETAIL RESPONSE:', data);
  //     this.event = data;
  //   });
  }
}

