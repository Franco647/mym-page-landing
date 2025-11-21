import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Producto {
  nombre: string;
  cantidad: number | null;
  unidad: string;
}

@Component({
  selector: 'app-cotizacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cotizacion.component.html',
  styleUrl: './cotizacion.component.css'
})
export class CotizacionComponent {

  terminoBusqueda: string = '';

  productos: Producto[] = [
    // Papelería Comercial y Publicidad
    { nombre: 'Tarjetas Personales', cantidad: null, unidad: 'unidades' },
    { nombre: 'Stickers / Calcos (Cuadrados/Circulares)', cantidad: null, unidad: 'unidades' },
    { nombre: 'Flyers / Volantes (Simple Faz)', cantidad: null, unidad: 'unidades' },
    { nombre: 'Folletos (Dípticos / Trípticos)', cantidad: null, unidad: 'unidades' },
    { nombre: 'Etiquetas Colgantes / Tags', cantidad: null, unidad: 'unidades' },
    { nombre: 'Impresiones A3 / A4 (Color/ByN)', cantidad: null, unidad: 'hojas' },
    { nombre: 'Impresiones en Papel Kraft', cantidad: null, unidad: 'hojas' },
    
    // Institucional y Oficina
    { nombre: 'Carpetas A4 con Solapa', cantidad: null, unidad: 'unidades' },
    { nombre: 'Hojas Membretadas', cantidad: null, unidad: 'unidades' },
    { nombre: 'Sobres Personalizados', cantidad: null, unidad: 'unidades' },
    { nombre: 'Talonarios (Señas / Turnos / Presupuesto)', cantidad: null, unidad: 'blocks' },
    { nombre: 'Certificados / Diplomas', cantidad: null, unidad: 'unidades' },
    { nombre: 'Libretas / Agendas Personalizadas', cantidad: null, unidad: 'unidades' },

    // Eventos y Fechas Especiales
    { nombre: 'Invitaciones (Casamiento / 15 Años)', cantidad: null, unidad: 'unidades' },
    { nombre: 'Entradas para Eventos', cantidad: null, unidad: 'unidades' },
    { nombre: 'Centros de Mesa (Tipo Carpa)', cantidad: null, unidad: 'unidades' },
    { nombre: 'Kits / Combos Cumpleaños', cantidad: null, unidad: 'kits' },
    { nombre: 'Giftcards / Tarjetones / Postales', cantidad: null, unidad: 'unidades' },
    { nombre: 'Calendarios (Pared / Escritorio / Mignon)', cantidad: null, unidad: 'unidades' },

    // Gran Formato y Cartelería
    { nombre: 'Vinilo de Corte / Ploteo Vidrieras', cantidad: null, unidad: 'metros' },
    { nombre: 'Vinilo Impreso', cantidad: null, unidad: 'metros²' },
    { nombre: 'Lona Front / Cartelería', cantidad: null, unidad: 'metros²' },
    { nombre: 'Banners con Portabanner', cantidad: null, unidad: 'unidades' },
    { nombre: 'Imanes Publicitarios', cantidad: null, unidad: 'unidades' },

    // Servicios y Merchandising
    { nombre: 'Estampado / Sublimación (Remeras)', cantidad: null, unidad: 'unidades' },
    { nombre: 'Merchandising (Gorras / Biromes)', cantidad: null, unidad: 'unidades' },
    { nombre: 'Anillados / Plastificados', cantidad: null, unidad: 'unidades' },
    { nombre: 'Libros / Revistas', cantidad: null, unidad: 'unidades' },
    { nombre: 'Servicio de Diseño Gráfico', cantidad: null, unidad: 'diseños' },
  ];

  get productosFiltrados(): Producto[] {
    if (!this.terminoBusqueda) {
      return this.productos;
    }
    const termino = this.terminoBusqueda.toLowerCase();
    return this.productos.filter(p => p.nombre.toLowerCase().includes(termino));
  }

  enviarPresupuesto() {
    const seleccionados = this.productos.filter(p => p.cantidad && p.cantidad > 0);

    if (seleccionados.length === 0) {
      alert('Por favor, ingresá la cantidad de al menos un producto para cotizar.');
      return;
    }

    let mensaje = `Hola M&M! Me gustaría solicitar un presupuesto para lo siguiente:\n\n`;

    seleccionados.forEach(p => {
      mensaje += `- ${p.cantidad} ${p.unidad} de *${p.nombre}*\n`;
    });

    mensaje += `\nQuedo a la espera de la cotización. Gracias!`;

    const telefono = '5493412512918'; 

    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
  }

}