import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../API/api';

@Component({
  selector: 'app-event-detail',
  imports: [],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
})
export class EventDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private api = inject(Api);

  event: any | null = null;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  console.log('EVENT ID FROM ROUTE:', id);
  
  if (!id) {
    console.error('No event ID in route');
    return;
  }
    this.api.get_event_by_id(id!).subscribe(data => {
      console.log('EVENT DETAIL RESPONSE:', data);
      this.event = data;
    });
  }
}

