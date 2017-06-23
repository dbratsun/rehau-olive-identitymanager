import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from '../../core/models/role';

@Component({
  selector: 'app-role-view-dumb',
  templateUrl: './role-view-dumb.component.html'
})
export class RoleViewDumbComponent {
  @Input() items: Role[];
  @Input() settingsCollapsed: boolean = true;
  @Output() onNewRole = new EventEmitter();
  @Output() onEditRole = new EventEmitter();
  @Output() onDeleteRole = new EventEmitter();

  newRole() {
    this.onNewRole.emit();
  }

  editRole(role: Role) {
    this.onEditRole.emit(role);
  }

  deleteRole(role: Role) {
    this.onDeleteRole.emit(role);
  }
}
