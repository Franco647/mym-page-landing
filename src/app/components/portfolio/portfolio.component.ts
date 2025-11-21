import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PortfolioItem {
  url: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  activeCategory: string = 'todos';

  portfolioItems: PortfolioItem[] = [
    {
      url: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop',
      title: 'Tarjetas Personales Premium',
      category: 'papeleria'
    },
    {
      url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
      title: 'Stickers Troquelados en Bobina',
      category: 'etiquetas'
    },
    {
      url: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?q=80&w=800&auto=format&fit=crop',
      title: 'Folletos Trípticos',
      category: 'papeleria'
    },
    {
      url: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=800&auto=format&fit=crop',
      title: 'Lonas y Gran Formato',
      category: 'gran-formato'
    },
    {
      url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
      title: 'Cuadernos Corporativos',
      category: 'merchandising'
    },
    {
      url: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop',
      title: 'Etiquetas Colgantes (Tags)',
      category: 'etiquetas'
    },
    {
      url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
      title: 'Carpetas Institucionales',
      category: 'papeleria'
    },
    {
      url: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop',
      title: 'Impresión de Remeras',
      category: 'merchandising'
    },
    {
      url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
      title: 'Talonarios y Facturas',
      category: 'papeleria'
    }
  ];

  get filteredItems() {
    if (this.activeCategory === 'todos') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter(item => item.category === this.activeCategory);
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }
}