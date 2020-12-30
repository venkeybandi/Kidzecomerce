import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
// import { OptionalMutableData } from '@polymer/polymer/lib/mixins/mutable-data.js';
import '@polymer/iron-ajax/iron-ajax.js';
import  {NewarivalProducts } from './newarival-products.js';
import './shared-styles.js';
import './cart-summary-styles.js';
import './banners-promos/promo-banner3.js';
import './order-summary.js';


export class CartDetails extends NewarivalProducts {
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
            margin-top: 50px;
            text-align: center;
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
                        <h1 class="title">CART</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="container"> <!-- container -->
            <div class="row">   <!-- row -->
                <div class="col m6 s12"> <!-- col 6 12 start-->
                    <div class="products-container"> <!--  product container start-->
                        <div class="product-header">
                            <h5 class="product-title">PRODUCT</h5>
                            <h5 class="quantity">NAME</h5>
                            <h5 class="price">Qty</h5>
                            <h5 class="price">PRICE</h5>
                        </div>
                        <!-- product details about on cart page -->
                        <template is="dom-repeat" items="{{itemList}}" restamp="true">
                            <div class="products"> <!-- 1st product start-->
                                <div class="product">
                                    <img src='{{item.0}}'>
                                    
                                </div>
                                <div class="quantity">
                                    <i></i>
                                    <span>{{item.1}}</span>
                                    <i></i>
                                </div>
                                <div class="price"><i class="fa fa-rupee"></i>{{item.3}}</div>
                                
                                <div class="total">
                                <span><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>{{item.4}}</span>
                                </div>
                            </div>  <!-- 1st product end-->
                        </template>
                        <a data-target="modal1" role="link" href="[[rootPath]]login" class="place-btn">Place Order</a>
                    </div> <!--  product container End--> 
                </div>  <!-- col 6 12 end -->

                

                <div class="col m6 s12"> <!-- col 6 12 start-->
                    <div class="order-summary">
                        <div class="orderSummary">
                            <h1>Order Summary</h1>
                            <div class="producttotal line1">

                                <span class="ordertitle">Orders amount:</span>
                                <span class="orderlvalue">
                                    <iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>
                                    {{cartCost}}</span>
                            </div>

                            <div class="producttotal line2">
                                <span class="ordertitle">delivery charges:</span>
                                <span class="orderlvalue"><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>
                                {{dellivarycharges}}</span>
                            </div>

                            <div class="producttotal line3">
                                <span class="ordertitle">Tax:</span>
                                <span class="orderlvalue"><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>
                                {{taxamount}}</span>
                            </div>

                            <div class="producttotal line4">
                                <span class="ordertitle">Total amount</span>
                                <span class="orderlvalue"><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>{{summarytotalamount}}</span>
                            </div>
                        </div>
                    </div> 


                    <!-- <div class="checkout-btn">
                        <a data-target="modal1" role="link" href="[[rootPath]]login" class="place-btn">Place Order</a>
                    </div>-->
                </div>   <!-- col 6 12 end -->
            </div>  <!-- row -->
        </div>  <!-- container -->


    `;
    }

    //adding properties to to accessing the application where ever required
    static get properties() { return { 
        response: { type: Object },
          _isRequest:{
            type:Boolean,
            value:true
          },
          cartCost:{
            type: Object,
            value: null
          },
          dellivarycharges:{
            type: Number,
            value: null
          },
          taxamount:{
            type: Number,
            value: null
          },
          summarytotalamount:{
            type: Number,
            value: null
          }
    
        }
      }
  
    ready() {
        super.ready();
        this.itemList = JSON.parse(window.localStorage.getItem('productsInLocalStore'));

        //summary calculations section Amount, Delivary charges, TOTAL COAT
        this.cartCost = window.localStorage.getItem('totalamount');

        this.dellivarycharges = this.cartCost * 0.02;

        this.taxamount = this.cartCost * 0.01;

        this.summarytotalamount = Math.round(Number(this.cartCost) + Number(this.dellivarycharges) + Number(this.taxamount));

        
    }
}

window.customElements.define('cart-details', CartDetails);
