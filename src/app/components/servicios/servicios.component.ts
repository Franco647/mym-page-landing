import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios = [
    { icon: 'fa-file-invoice', title: 'Facturas & Talonarios' },
    { icon: 'fa-id-card', title: 'Tarjetas Personales' },
    { icon: 'fa-sticky-note', title: 'Calcos & Stickers' },
    { icon: 'fa-magnet', title: 'Imanes Publicitarios' },
    { icon: 'fa-newspaper', title: 'Folletos & Volantes' },
    { icon: 'fa-book-open', title: 'Revistas & Catálogos' },
    { icon: 'fa-folder', title: 'Carpetas Institucionales' },
    { icon: 'fa-envelope', title: 'Sobres Membretados' },
    { icon: 'fa-bullhorn', title: 'Banners & Lonas' },
    { icon: 'fa-calendar-alt', title: 'Almanaques' },
    { icon: 'fa-print', title: 'Gigantografías' },
    { icon: 'fa-tshirt', title: 'Sublimados' },
    { icon: 'fa-layer-group', title: 'Vinilos de Corte' },
    { icon: 'fa-copy', title: 'Anillados & Plastificados' }
  ];
}