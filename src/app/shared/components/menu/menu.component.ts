import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent{
  public menuItems: MenuItem[] = [];

  ngOnInit(){
    this.menuItems = [
      {
        label:'Pipes de Angular',
        icon:'pi pi-align-left',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            url:'/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            url:'/numbers',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            url:'/uncommon',
          }
        ]
      },
      {
        label:'Pipes personalizados',
        icon:'pi pi-cog',
        items:[
          {
            label:'Otro elemento',
          }
        ]
      }
    ]
  }
}
