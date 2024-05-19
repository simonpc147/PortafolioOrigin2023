import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private http: HttpClient) { }

  sendMessage(body: any) {
     return this.http.post('https://enviocorreo.onrender.com/formulario', body);
    }
}
