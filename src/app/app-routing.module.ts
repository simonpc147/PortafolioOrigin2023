import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PoliticasComponent } from './pages/politicas/politicas.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { PoliticasCookiesComponent } from './pages/politicas-cookies/politicas-cookies.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DWebComponent } from './pages/d-web/d-web.component';
import { TiendasOnlineComponent } from './pages/tiendas-online/tiendas-online.component';
import { SeoComponent } from './pages/seo/seo.component';
import { SiteMapComponent } from './pages/site-map/site-map.component';

const routes: Routes = [
  {path: 'diseñador-web', component:HomeComponent},
  {path: 'politicas', component:PoliticasComponent},
  {path: 'politicas-cookies', component:PoliticasCookiesComponent},
  {path: 'aviso-legal', component:AvisoLegalComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'portafolio', component:PortfolioComponent},
  {path: 'contacto', component:ContactComponent},
  {path: 'diseño-web', component:DWebComponent},
  {path: 'tiendas-online', component:TiendasOnlineComponent},
  {path: 'posicionamiento-en-buscadores', component:SeoComponent},
  {path: 'sitemap', component:SiteMapComponent},
  {path: '**', redirectTo: 'diseñador-web'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
