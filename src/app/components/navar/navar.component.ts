import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-navar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navar.component.html'
 
})
export class NavarComponent {

  routes = routes.map((route)=>{ return { path: route.path, title: route.title } })

}
