import { Controller } from "@hotwired/stimulus"
import JsBarcode from "jsbarcode"

// Connects to data-controller="barcode"
export default class extends Controller {
  connect() {
    console.log("Stimulus connected")

    const options = {
      format: "CODE128",
      lineColor: "#0000FF",
      displayValue: true,
      width: 2,
      margin: 5
    }

    JsBarcode(this.element, this.element.dataset.code, options)
  }
}
