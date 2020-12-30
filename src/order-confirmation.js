
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { CartDetails } from './cart-details.js';
import './shared-styles.js';
import './newarival-products.js';
import './cart-summary-styles.js';
import './order-summary.js';
import './cart-details.js';

class OrderConfirmation extends CartDetails {
  static get template() {
    return html`
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <style include="cart-summary-styles">
    .order-confirm h1 {
        font-size: 38px;
        font-weight: 700;
        letter-spacing: .64px;
        margin-bottom: 10px;
    }
    .order-confirm p{
        margin: 0;
    }
    .order-receipt{
        font-size: 32px;
        font-weight: 700;
        padding-bottom: 5px;
        margin-bottom: 50px;
        text-transform: uppercase;
        border-bottom: 2px solid #7f7f7f;
    }

    .customer-details, .shiping-address, .payment-details{
        margin-bottom: 30px;
        border-bottom: .5px solid royalblue;
        box-shadow: 1px 2px 5px #ccc;
        padding: 10px;
        cursor: pointer;
        -webkit-transition: all ease .4s;

    }
    .customer-details:hover, .shiping-address:hover, .payment-details:hover{
        box-shadow: 0px 0px 10px 0px #ccc;
    }
    .shiping-details h6{
        font-size: 20px;
        background: royalblue;
        color: #ffffff;
        padding: 6px;
        margin: 0 0 15px;
    }
    .shiping-details p{
        margin: 0;
        padding: 0;
    }
    .shiping-details p span{
        font-size: 18px;
        font-weight: 600;
    }
    strong{
        font-weight: 600!important;
    }
    @media (max-width: 600px){
        .order-confirm h1 {
            font-size: 28px;
        }
        .order-receipt {
            margin: 20px 0;
        }
    }
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
                            <p><span>First name:</span> {{item.0}}</p>
                            <p><span>Last name:</span> {{item.1}}</p>
                            <p><span>Phone no:</span> {{item.2}}</p>
                            <p><span>Email Id:</span> {{item.3}}</p>
                        </div>
                        
                        <div class="shiping-address">
                            <h6><span>Shipping Address</h6>
                            <p><span>Door No:</span> {{item.4}}</p>
                            <p><span>Street:</span> {{item.5}}</p>
                            <p><span>City:</span> {{item.6}}</p>
                            <p><span>State:</span> {{item.7}}</p>
                            <p><span>Pincode:</span> {{item.8}}</p>
                        </div>
                    </template>
                </div>
                <div class = "col m6 s12">
                    <template is="dom-repeat" items="{{customerlist}}" >
                        <div class="payment-details">
                            <h6>Payment Details</h6>
                            <p><span>Card name:</span> {{item.9}}</p>
                            <p><span>Card number:</span> {{item.10}}</p>
                            <p><span>Pin:</span> {{item.11}}</p>
                        </div>
                    </template>
                </div>
            </div>
        </div> <!-- row -->

        <!-- Placed order products displying -->
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
                    <template is="dom-repeat" items="{{itemList}}" mutable-data>
                        <div class="products"> <!-- 1st product start-->
                            <div class="product">
                                <img src='{{item.0}}'>
                            </div>
                            <div class="quantity">
                                <i></i>
                                <span><span>{{item.1}}</span></span>
                                <i></i>
                            </div>
                            <div class="price"><i class="fa fa-rupee"></i>{{item.3}}</div>
                            
                            <div class="total">
                            <span><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>{{item.4}}</span>
                            </div>
                        </div>  <!-- 1st product end-->
                    </template>
                </div> <!--  product container End--> 
            </div>  <!-- col 6 12 end -->

            <!-- Order summary details -->
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

    //summary calculations section Amount, Delivary charges, TOTAL COAT
    // this.cartCost = window.localStorage.getItem('totalamount');

    // this.dellivarycharges = this.cartCost * 0.02;

    // this.summarytotalamount = Number(this.cartCost) + Number(this.dellivarycharges);

    }

}

window.customElements.define('order-confirmation', OrderConfirmation);
