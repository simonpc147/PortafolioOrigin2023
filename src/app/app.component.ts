import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Proyecto-Portafolio000';
 
  public active : boolean = false;
  
  responsiveMenu(): void {
    this.active = !this.active;

    const open = document.querySelector("#open");
    const close = document.querySelector("#close");
    open?.classList.toggle("active");
    close?.classList.toggle("active");
  }

  

  darkModeEnabled = false;

  constructor() {
    const storedDarkMode = localStorage.getItem('darkModeEnabled');
    if (storedDarkMode) {
      this.darkModeEnabled = JSON.parse(storedDarkMode);
    }
  }

  toggleDarkMode() {
    this.darkModeEnabled = !this.darkModeEnabled;
    
    const light = document.querySelector(".light");
    const dark = document.querySelector(".dark");

    light?.classList.toggle("active");
    dark?.classList.toggle("active");

    localStorage.setItem('darkModeEnabled', JSON.stringify(this.darkModeEnabled));

  }

  scrollToDistance(distance: number) {
    window.scrollTo({
      top: distance,
      behavior: 'smooth' // Opcional: agrega un desplazamiento suave
    });
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

  menu(){
    const border = document.querySelectorAll('.border')
    border.forEach(borderElement => {
      borderElement.addEventListener('click', ()=>{
       
        borderElement.classList.add('active');
       
        border.forEach(borderElemento => {
          if (borderElemento !== borderElement) {
            borderElemento.classList.remove('active');
          }
  
      })
    })
  })
  }
  
}