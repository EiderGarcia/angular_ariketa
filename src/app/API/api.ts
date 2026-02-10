import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);
  private baseUrl = "https://api.euskadi.eus/culture/events/v1.0/events/";
  page = 1;
  elements = 20;
   private typeMap: Record<string, number> = {
    kontzertuak: 1,
    erakusketa: 3,
    dantza: 4,
  };

 get_events(typeName: string): Observable<any> {
    const typeId = this.typeMap[typeName.toLowerCase()];

    if (!typeId) {
      throw new Error(`Unknown event type: ${typeName}`);
    }

    return this.http.get<any>(`${this.baseUrl}/byType/${typeId}`, {
      params: {
        _elements: this.elements.toString(),
        _page: this.page.toString()
      }
    });
  }
  get_event_by_id(id: string) {
  return this.http.get<any>(`${this.baseUrl}/${id}`);
}

}