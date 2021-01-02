// Import the Polymer library and html helper function
// Import the component newarival-products
// Import the component order-summary
// Import the component slider-home
// Import the component cart-details
// Import the cart-summary-styles
// Import the base class CartDetails form cart-details component

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { CartDetails } from './cart-details.js';
import './shared-styles.js';
import './products-delivary-banner.js';
import './newarival-products.js';
import './cart-summary-styles.js';
import './order-summary.js';
import './cart-details.js';

// Define the new element as a class
// child-element renders its light DOM children inside this compnent
class OrderConfirmation extends CartDetails {
  static get template() {
    return html`
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <style include="cart-summary-styles">
    
    </style>
    <template is="dom-repeat" items="{{customerlist}}">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <div class="order-confirm">
                        <h1>THANK YOU FOR YOUR ORDER</h1>
                        <p>An email with your order information will be sent to <strong> {{item.3}} </strong><p>
                    </div>
                </div>
            </div>
        </div>
    </template>
    

    <div class="container"> <!-- container -->
        <div class="row">   <!-- row -->
            <div class="col s12">
                <h1 class="order-receipt">Order receipt</h1>
            </div>

            <!-- shipping detiles and customer detailes and payment details -->
            <div class = "col s12 shiping-details" >
                <div class = "col m6 s12">
                    <!-- Receving data where stored in local storage and displaying here -->
                    <template is="dom-repeat" items="{{customerlist}}" >
                        <div class="customer-details">
                            <h6>Shipping Details</h6>
                            <p><span>First name:</span> [[item.0]]</p>
                            <p><span>Last name:</span> [[item.1]]</p>
                            <p><span>Phone no:</span> [[item.2]]</p>
                            <p><span>Email Id:</span> [[item.3]]</p>
                        </div>
                        
                        <div class="shiping-address">
                            <h6><span>Shipping Address</h6>
                            <p><span>Door No:</span> [[item.4]]</p>
                            <p><span>Street:</span> [[item.5]]</p>
                            <p><span>City:</span> [[item.6]]</p>
                            <p><span>State:</span> [[item.7]]</p>
                            <p><span>Pincode:</span> [[item.8]]</p>
                        </div>
                    </template>
                </div>
                <div class = "col m6 s12">
                    <template is="dom-repeat" items="{{customerlist}}" >
                        <div class="payment-details">
                            <h6>Payment Details</h6>
                            <p><span>Card name:</span> [[item.9]]</p>
                            <p><span>Card number:</span> [[item.10]]</p>
                            <p><span>Pin:</span> <span class="maskpin">[[item.11]]</span></p>
                        </div>
                    </template>
                </div>
            </div>
        </div> <!-- row -->

        <!-- Placed order products displying -->
        <div class="row">   <!-- row -->
            <div class="col m6 s12"> <!-- col 6 12 start-->
                <cart-products></cart-products>
            </div>  <!-- col 6 12 end -->

            <!-- Order summary details -->
            <div class="col m6 s12"> <!-- col 6 12 start-->
                <order-summary></order-summary> 
            </div>  <!-- col 6 12 end -->
            
        </div>  <!-- row -->
    </div>  <!-- container -->
    `;
  }

  ready() {
    super.ready();
    //custemeer details getting through local storage
    this.customerlist = JSON.parse(window.localStorage.getItem('customer-entries'));

    //product details getting through local storage and displying in confirmation section
    this.itemList = JSON.parse(window.localStorage.getItem('productsInLocalStore'));

    
    }

}
//registering into the webbrowser using cusomelement
window.customElements.define('order-confirmation', OrderConfirmation);
