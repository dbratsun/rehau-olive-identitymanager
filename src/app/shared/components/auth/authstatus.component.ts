import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'oli-authstatus',
    templateUrl: './authstatus.component.html',
    styleUrls: ['./authstatus.component.scss']
})
export class AuthStatusComponent {
    @Input() username: string = '';
    @Input() isAuthorized: boolean = false;
    @Output() changeAuthStatus = new EventEmitter();
    @Output() usernameClick = new EventEmitter();
} 