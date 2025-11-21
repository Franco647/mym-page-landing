import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';
import { HeaderComponent } from "./components/header/header.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { HeroComponent } from "./components/hero/hero.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { CotizacionComponent } from "./components/cotizacion/cotizacion.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { Meta, Title } from '@angular/platform-browser';
import { NosotrosComponent } from "./components/nosotros/nosotros.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServiciosComponent, HeroComponent, PortfolioComponent, CotizacionComponent, ContactoComponent, NosotrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'M&M';

  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('M&M');
    this.meta.addTags([
      { name: 'description', content: 'Imprenta en Rosario zona Echesortu. Impresión de tarjetas personales, folletos, vinilos, lonas y gigantografías. Calidad y rapidez. ¡Pedí tu presupuesto!' },
      { name: 'keywords', content: 'imprenta rosario, tarjetas personales, folletos, gigantografias, mendoza 4226, imprenta zona oeste' },
      { name: 'author', content: 'M&M Imprenta' },
      { property: 'og:title', content: 'M&M Imprenta Rosario' },
      { property: 'og:description', content: 'Soluciones gráficas integrales en Rosario.' },
      { property: 'og:image', content: 'https://tu-dominio.com/assets/logo-o-foto.jpg' },
    ]);
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1200,
      once: true
    });
  }

}
