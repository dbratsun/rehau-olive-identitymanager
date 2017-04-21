import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms"
import { GenericModalComponent } from "../../generic/generic-modal.component";
@Component({
  selector: "comment-dialog",
  templateUrl: "comment-dialog.component.html"
})
export class CommentDialogComponent {
    private commentHeader: string;
    private commentText: string;

    private commentHeaderCtrl: FormControl;
    private conmmentTextCtrl: FormControl;
    private form : FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.commentHeaderCtrl = formBuilder.control("");
        this.conmmentTextCtrl = formBuilder.control("");
        this.form = formBuilder.group({
            commentHeader: this.commentHeaderCtrl,
            commentText: this.conmmentTextCtrl
        });
    }

    onSubmit() {
        if (this.form.valid) {}
    }
}
