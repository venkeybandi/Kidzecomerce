
// Import the Polymer library and html helper function
// Import the  cart-products for products
// Import the Base class AddToCart form addto-cart component
// cart-products reusable component to displaying addtocart products 
// order-summary reusable components displaying order summary details 
// import materialize styles 
// import cart-summary-styles styles 

/**
 * export class CartDetails for accessing the properties and methods in child class
 * <cart-products></cart-products> created for addtocart products for reusable componet
 * <order-summary></order-summary> created for order summary for 
 * calculating products amount, tax, delivery charges for reusable componet
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './cart-products.js';
import './cart-summary-styles.js';

// Define the new element as a class
// child-element renders its light DOM children inside this compnent
export class CartDetails extends PolymerElement {
    // Provide a DOM template for the element
    static get template() {
        return html `
        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

        <!-- Compiled and minified JavaScript -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    
        <style include="cart-summary-styles">
            :host {
                display: block;
                padding: 10px;
                font-family: "Roboto", "Noto", sans-serif;
            }
            .title{
                padding-bottom: 5px;
                text-transform: uppercase;
                border-bottom: 2px solid #7f7f7f;
                margin-bottom: 0;
                font-size: 40px;
            }
            .checkout-btn{
                width: 380px;
                margin: 0 auto;
                margin-top: -60px;
                padding: 0 15px;
            }
            .place-btn{
                display: block;
                margin-top: 50px;
                text-align: center;
                font-family: "Roboto", "Noto", sans-serif;
            }
            @media (max-width: 768px) and (min-width: 641px) {
                .title{
                    margin: 0;
                }
                .checkout-btn {
                    width: 340px;
                }
            }
            @media (max-width: 640px){
                .checkout-btn{
                    width: 100%;
                    padding: 0;
                }
                .title{
                    margin: 0;
                }
            }
        </style>
          
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <promo-banner3></promo-banner3>
                </div>
            </div>
        </div>
      
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <div class="cart-title">
                        <h1 class="title" tabindex="0">CART [[cartquantity]]</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="container"> <!-- container -->
            <div class="row">   <!-- row -->
                <div class="col m6 s12"> <!-- col 6 12 start-->

                    <!-- cart-products reusable component displaying addtocart products -->
                    <cart-products></cart-products>
                    <a  role="link" href="[[rootPath]]login" class="place-btn">Place Order</a>
                </div>  <!-- col 6 12 end -->

                <div class="col m6 s12"> <!-- col 6 12 start-->

                <!-- order-summary reusable component displaying order summary details -->
                    <order-summary></order-summary>
                </div>   <!-- col 6 12 end -->

            </div>  <!-- row -->
        </div>  <!-- container -->
    `;
    }

    ready() {
        super.ready();
    }
}

//@customElement BestsellerProducts register to webbrowser
window.customElements.define('cart-details', CartDetails);
