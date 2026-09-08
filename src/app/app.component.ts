import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X, Phone, MapPin, Clock3, Car, Bike, Truck, Bus, Tractor, ArrowRight, ShieldCheck, Route, Warehouse, Instagram } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly icons = { Menu, X, Phone, MapPin, Clock3, ArrowRight, ShieldCheck, Route, Warehouse, Instagram };
  readonly menuOpen = signal(false);
  readonly year = new Date().getFullYear();
  readonly services = [
    { icon: Car, title: 'Automóveis', text: 'Remoção cuidadosa de carros de passeio, utilitários e veículos leves.' },
    { icon: Bike, title: 'Motos', text: 'Transporte seguro de motocicletas, com fixação adequada durante todo o trajeto.' },
    { icon: Truck, title: 'Caminhões', text: 'Estrutura para remoção e logística de veículos pesados em Ibirité e região.' },
    { icon: Bus, title: 'Ônibus', text: 'Apoio especializado para transporte e movimentação de ônibus e micro-ônibus.' },
    { icon: Tractor, title: 'Máquinas', text: 'Logística de máquinas e equipamentos conforme as condições de cada operação.' }
  ];

  closeMenu(): void { this.menuOpen.set(false); }
}
