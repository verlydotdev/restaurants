import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@restaurants/api-interfaces';

@Component({
  selector: 'restaurants-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
