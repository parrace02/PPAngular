import { Routes } from '@angular/router';
import {ListaComponent} from './Dominios/Productos/paginas/lista/lista.component'
import { AboutComponent} from './Dominios/Info/Paginas/about/about.component';
export const routes: Routes = [
    {
        path: '',
        component:ListaComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
    
];
