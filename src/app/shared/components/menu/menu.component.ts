import { Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public items: MenuItem[]=[];

    ngOnInit() {
        this.items = [
          {
            label:'Pipes de Angular',
            icon:'pi pi-desktop',
            items:[
              {
                label:'Textos y Fechas',
                icon:'pi pi-align-left',
                routerLink:''
              },
              {
                label: 'Números',
                icon:'pi pi-dollar',
                routerLink:'numbers'
              },
              {
                label: 'No comunes',
                icon:'pi pi-globe',
                routerLink:'uncommon'
              },
            ]
          },
          {
            label:'Pipes personalizados',
            icon:'pi pi-cog',
            items:[
              {
                label:'Custom Pipes',
              icon:'pi pi-cog',
              routerLink:'custom'

              }
            ]

          }
        ];
    }

}
