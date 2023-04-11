import { Component } from '@angular/core';
import { MensajeService } from './service/mensaje.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Proyecto-Portafolio000';
 

  public active : boolean = false;

  responsiveMenu(): void {
    this.active = !this.active;
  }


  constructor(public http: MensajeService) { }

  contactForm(form: any) {
    this.http.sendMessage(form).subscribe(() => {
    Swal.fire("Formulario de contacto", "Mensaje enviado correctamente", 'success');
    });
    }
    
}
