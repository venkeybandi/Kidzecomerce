// Import the Polymer library and html helper function
// order-summary reusable components displaying order summary details 
// import cart-summary-styles styles 
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './cart-summary-styles.js';
import './banners-promos/promo-banner3.js';

// Define the new element as a class
class CartProducts extends PolymerElement {
    // Provide a DOM template for the element
    static get template() {
        return html `
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

        
        <div class="products-container"> <!--  product container start-->
            <div class="product-header">
                <h5 class="product-title">PRODUCT</h5>
                <h5 class="quantity">NAME</h5>
                <h5 class="price">Qty</h5>
                <h5 class="price">PRICE</h5>
            </div>
            <!-- product details  cart page -->
            <template is="dom-repeat" items="{{itemList}}" restamp="true">
                <div class="products"> <!-- 1st product start-->
                    <div class="product">
                        <img src='[[item.0]]' tabindex="0" alt="[[item.1]]">
                        <span title="[[item.5]]" tabindex="0">[[item.5]]</span>
                    </div>
                    <div class="quantity">
                        <p title="[[item.1]]" tabindex="0">[[item.1]]</p>
                        
                    </div>
                    <div class="price" tabindex="0"><i class="fa fa-rupee"></i>[[item.3]]</div>
                    
                    <div class="total">
                    <span tabindex="0"><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>[[item.4]]</span>
                    </div>
                </div>  <!-- 1st product end-->
            </template>
        </div> <!--  product container End--> 
    `;
    }

    ready() {
        super.ready();
        //products displying in cart page
        this.itemList = JSON.parse(window.localStorage.getItem('productsInLocalStore'));

         //  Cart quantity
        this.cartquantity = window.localStorage.getItem('cartqty');
    }
}

window.customElements.define('cart-products', CartProducts);