import { Component, Input } from "@angular/core";
import { Subject } from "rxjs/Rx";
 
@Component({
    selector: "generic-modal",
    templateUrl: "generic-modal.component.html"
})
export class GenericModalComponent {
    @Input() public showObservable: Subject<boolean>;
    @Input() public title: string;
     
    //some logic to focus on the first focusable element inside the dialog
     
    public onClose() {
        this.showObservable.next(false);
    }
}
