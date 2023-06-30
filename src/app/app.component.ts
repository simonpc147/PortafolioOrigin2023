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

    arrowsOne(){
    console.log("alerta");

    const grande = document.querySelector('.grande');
    const punto2 = document.querySelectorAll('.arrows2'); 
    

    for(let i=0; i < punto2.length; i++){
    
        if(grande?.classList.contains("posicion-two")){

            grande?.classList.remove("posicion-two");
            grande?.classList.remove("posicion-three");
            grande?.classList.add("posicion-one");

        } else if( grande?.classList.contains("posicion-three")){
            grande?.classList.remove("posicion-three");
            grande?.classList.remove("posicion-one");
            grande?.classList.add("posicion-two");
        } else{
            grande?.classList.add("posicion-one");
        }

      };
}

    arrowsTwo(){

    console.log("alerta");
    const grande = document.querySelector('.grande');
    const punto  = document.querySelectorAll('.arrows');

        // Asignamos un CLICK a cadaPunto
      for(let i=0; i < punto.length; i++){
    
            if(grande?.classList.contains("posicion-one") ){
                grande?.classList.add("posicion-two");
                grande?.classList.remove("posicion-one");
            } else if (grande?.classList.contains("posicion-two")){
                grande?.classList.add("posicion-three");
                grande?.classList.remove("posicion-two");
            }else{
              grande?.classList.add("posicion-three");
              grande?.classList.remove("posicion-two");
    
            }
        };

}
      
  constructor(public http: MensajeService) { }

  contactForm(form: any) {
    Swal.showLoading.apply("cargando...")
    this.http.sendMessage(form).subscribe(() => {
    Swal.hideLoading()
    Swal.fire("Formulario de contacto", "Mensaje enviado correctamente", 'success');
    });
    }
    
}
