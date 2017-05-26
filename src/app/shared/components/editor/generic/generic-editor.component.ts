import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "generic-editor",
    templateUrl: "generic-editor.component.html"
})
export class GenericEditorComponent {
    @Input() typeName: string;
    @Input() editing: boolean = false;
    @Output() onSave = new EventEmitter();
    @Output() onCancel = new EventEmitter();
    @Output() onReset = new EventEmitter();

    save(form) {
        this.onSave.emit(form);    
    }

    cancel() {
        this.onCancel.emit();
    }

    reset() {
        this.onReset.emit();
    }

}