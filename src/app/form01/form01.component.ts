import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "form01",
  templateUrl: "form01.component.html",
  styleUrls: ["./form01.component.css"]
})
export class Form01Component implements OnInit {
  model = {
    firstname: "",
    lastname: ""
  };
  constructor() {}

  ngOnInit() {}
}
