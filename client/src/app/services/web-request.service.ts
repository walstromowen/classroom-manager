import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL

  constructor(private httpService: HttpClient) { 
    this.ROOT_URL= 'http://localhost:3000';
  }
  get(uri: string){
    return this.httpService.get(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: string, payload: Object){
    return this.httpService.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  patch(uri: string, payload: Object){
    return this.httpService.patch(`${this.ROOT_URL}/${uri}`, payload);
  }
  delete(uri: string){
    return this.httpService.delete(`${this.ROOT_URL}/${uri}`);
  }
}
