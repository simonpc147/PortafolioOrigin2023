import { Component } from '@angular/core';
import { MensajeService } from '../../service/mensaje.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  constructor(public http: MensajeService) { }

  contactForm(form: any) {
    Swal.showLoading.apply("cargando...");
    setTimeout(()=> {
      Swal.fire("Formulario de contacto", "Mensaje enviado correctamente", 'success');
    }, 1500);
    this.http.sendMessage(form).subscribe(()=>{ });
  }

}
