import { Component, HostListener } from '@angular/core';
import { MensajeService } from '../../service/mensaje.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  openDocumentInNewTab() {
    const documentUrl = 'assets/Documentos/CV de Front-end Developer.pdf'; // Reemplaza con la ruta y nombre de tu documento HTML
    window.open(documentUrl, '_blank');
  }

  constructor(public http: MensajeService) { }
  
  // contactForm(form: any) {
  //   Swal.showLoading.apply("cargando...")
  //   this.http.sendMessage(form).subscribe(() => {
  //   Swal.fire("Formulario de contacto", "Mensaje enviado correctamente", 'success');
  //   });
  // }

  contactForm(form: any) {
    Swal.showLoading.apply("cargando...");
    setTimeout(()=> {
      Swal.fire("Formulario de contacto", "Mensaje enviado correctamente", 'success');
    }, 1500);
    this.http.sendMessage(form).subscribe(()=>{ });
  }


  
  scrollTo(name:string){
    const div = document.getElementById(name);
    var rect = div?.getBoundingClientRect();

    // Calcular la posición de desplazamiento
    if (rect !== undefined) {
      // Calcular la posición de desplazamiento
      var scrollPosition = rect.top + window.pageYOffset;
    
      // Hacer el desplazamiento
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // Opcional: hacer el desplazamiento suave
      });
    }
  }

  scroll(name:string){
    const elemento = document.getElementById(name);
          elemento?.scrollIntoView({
            behavior: 'smooth' // Opcional: agrega un desplazamiento suave
          });
  }
  
  @HostListener('document:scroll')
  checkScroll(){

      document.addEventListener('scroll', () =>{
        const title = document.querySelector('.sobremi');
        const imagen = document.querySelector('.contenedor-foto');
        const imagenOne = document.querySelector('.img-1');
        const imagenTwo = document.querySelector('.img-2');
        const imagenThree = document.querySelector('.img-3');
        const projects = document.querySelector('.movimientoOne');
        const projectsTwo = document.querySelector('.movimientoTwo');
        const contactoForm = document.querySelector('.form');
        const FormImage = document.querySelector('.form-image');
        const distancia = title?.getBoundingClientRect().top;
     
        if(typeof distancia === 'number' && distancia <= 500){
          title?.classList.add('active');
        }else {
          title?.classList.remove('active');
        }

        if(typeof distancia === 'number' && distancia <= 480){
          imagen?.classList.add('active');
        }else {
          imagen?.classList.remove('active');
        }

        if(typeof distancia === 'number' && distancia <= -80){
          imagenOne?.classList.add('active');
          imagenTwo?.classList.add('active');
          imagenThree?.classList.add('active');
        }else {
          imagenOne?.classList.remove('active');
          imagenTwo?.classList.remove('active');
          imagenThree?.classList.remove('active');
        }

        if(typeof distancia === 'number' && distancia <= -2600){
          projects?.classList.add('active');
        }else {
          projects?.classList.remove('active');
        }

        if(typeof distancia === 'number' && distancia <= -3200){
          projectsTwo?.classList.add('active');
        }else {
          projectsTwo?.classList.remove('active');
        }

        if(typeof distancia === 'number' && distancia <= -3880){
          contactoForm?.classList.add('active');
          FormImage?.classList.add('active');
        }else {
          contactoForm?.classList.remove('active');
          FormImage?.classList.remove('active');
        }
    })
  }
  scrollToDistance(distance: number) {
    window.scrollTo({
      top: distance,
      behavior: 'smooth' // Opcional: agrega un desplazamiento suave
    });
  }
}
