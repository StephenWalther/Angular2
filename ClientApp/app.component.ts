import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NavMenuComponent } from './nav-menu.component';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    directives: [...ROUTER_DIRECTIVES, NavMenuComponent]
})
export class AppComponent {
}
