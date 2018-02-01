import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "form02",
  templateUrl: "./form02.component.html",
  styleUrls: ["./form02.component.css"]
})
export class Form02Component implements OnInit {
  nameForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.nameForm = new FormGroup(
      {
        firstname: new FormControl("", {
          validators: Validators.required
        }),
        lastname: new FormControl("", {
          validators: Validators.required
        })
      },
      { updateOn: "change" }
    );
  }

  isFieldValid(field: string) {
    return !this.nameForm.get(field).valid && this.nameForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      "has-error": this.isFieldValid(field),
      "has-feedback": this.isFieldValid(field)
    };
  }
}
