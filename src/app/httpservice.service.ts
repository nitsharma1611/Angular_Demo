import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private httpClient: HttpClient) { }
  post(endpoint: any, formData: any, callback: any) {
    this.httpClient.post(endpoint, formData).subscribe((response: any) => {
      callback(response);
    }, (error: any) => {
      callback.error('Error occurred during POST request:', error);
      callback(null, error);
    }
    );
  }
get(endpoint: any, callback: any) {

}
  
}