// Import the Polymer library and html helper function
// Import the cart-summary-styles

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './cart-summary-styles.js';

/**
 * creat class name OrderSummary
 * order-summary cutom element for reusable component
 * Using one-way binding bind the order summary details
 */
class OrderSummary extends PolymerElement {
// Provide a DOM template for the element
  static get template() {
    return html`      
        <style include="cart-summary-styles">
   
        </style>
      
        <div class="order-summary">
            <div class="orderSummary">
                <h1>Order Summary</h1>

                <div class="producttotal line1">
                    <span class="ordertitle">Orders amount:</span>
                    <span class="orderlvalue"><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>
                        [[cartCost]]
                    </span>
                </div>

                <div class="producttotal line2">
                    <span class="ordertitle">delivery charges:</span>
                    <span class="orderlvalue"><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>
                        [[dellivarycharges]]
                    </span>
                </div>

                <div class="producttotal line3">
                    <span class="ordertitle">Tax:</span>
                    <span class="orderlvalue"><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>
                        [[taxamount]]
                    </span>
                </div>

                <div class="producttotal line4">
                    <span class="ordertitle">Total amount</span>
                    <span class="orderlvalue"><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>
                        [[summarytotalamount]]
                    </span>
                </div>
            </div>
        </div> 
    `;
  }
    ready() {
        super.ready();
        /**
         * Order summary calculations productsmount, Delivary charges and Tax
         * dellivarycharges for this.cartCost * 0.02
         * Tax amount this.cartCost * 0.01 
         * TOTAL Order  summarytotalamount
         * this.cartCost + this.dellivarycharges + this.taxamount
         * Math.round round figure the price
         */
        this.cartCost = parseInt(window.localStorage.getItem('totalamount'));

        this.dellivarycharges = this.cartCost * 0.02;

        this.taxamount = this.cartCost * 0.01;

        this.summarytotalamount = Math.round(this.cartCost + this.dellivarycharges + this.taxamount);
    }
}
//registering into the webbrowser using cusomelement
window.customElements.define('order-summary', OrderSummary);
