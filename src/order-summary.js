
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './newarival-products.js';
import './cart-summary-styles.js';

class OrderSummary extends PolymerElement {
  static get template() {
    return html`    
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    
      <style include="cart-summary-styles">
   
      </style>
      
    <div class="order-summary">
        <div class="orderSummary">
            <table style="width:100%">
                <h1>Order Summary</h1>
                <tr>
                    <td><h4 class="ordertitle">Orders amount:</h4</td>
                    <td><h4 class="orderlvalue"><i class="fa fa-rupee"></i><span>{{item.price}}</span></h4></td>
                </tr>
                <tr>
                    <td><h4 class="taxtitle">Tax amount:</h4></td>
                    <td><h4 class="taxamount"><i class="fa fa-rupee"></i>{{item.2}} + 200</h4></td>
                </tr>
                <tr>
                    <td><h4 class="taxtitle">Delivary charges:</h4></td>
                    <td><h4 class="taxamount"><i class="fa fa-rupee"></i> 100</h4></td>
                </tr>
                <tr>
                    <td><h3 class="taxtitle">Total amount</h3></td>
                    <td><h3 class="taxamount"><i class="fa fa-rupee"></i> 3300</h3></td>
                </tr>
            </table>
            
        </div>
    </div> 
    `;
  }
}

window.customElements.define('order-summary', OrderSummary);
