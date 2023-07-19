import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-delivery-calculator",
  templateUrl: "./delivery-calculator.component.html",
  styleUrls: ["./delivery-calculator.component.scss"],
})
export class DeliveryCalculatorComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      country: new FormControl("", Validators.required),
      sity: new FormControl("", Validators.required),
      index: new FormControl("", [Validators.pattern("^[0-9]*$")]),
      weight: new FormControl("", [Validators.pattern("^[0-9]*$")]),
      additional: new FormControl(""),
    });
  }
}
