import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Division } from '../../shared/models/division';

@Component({
  selector: 'app-division-view-dumb',
  templateUrl: './division-view-dumb.component.html'
})
export class DivisionViewDumbComponent {
  @Input() items: Division[];
  @Input() settingsCollapsed: boolean = true;
  @Output() onNewDivision = new EventEmitter();
  @Output() onEditDivision = new EventEmitter();
  @Output() onDeleteDivision = new EventEmitter();

  newDivision() {
    this.onNewDivision.emit();
  }

  getUsersInfoString(division: Division) {
    return '';
  }

  editDivision(division: Division) {
    this.onEditDivision.emit(division);
  }

  deleteDivision(division: Division) {
    this.onDeleteDivision.emit(division);
  }
}
