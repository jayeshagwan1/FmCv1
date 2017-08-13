import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AuthenticationService } from '../service/authenticate'

@Component({
    selector: 'home-cmp',
    providers: [AuthenticationService],
    templateUrl: './home.component.html',
    styles: ['main { padding: 1em;font-family: Arial, Helvetica, sans-serif;text-align: center;margin-top: 50px;display: block;}']
})

export class HomeComponent {

 tiles = [
     
    // {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    // {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

    constructor(
        private _service: AuthenticationService) { }

    ngOnInit() {
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}