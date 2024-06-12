import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constant';

export class Message {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private httpClient: HttpClient) {}

  hello() {
    return this.httpClient.get<Message>(`${API_URL}/app/hello`);
  }
}
