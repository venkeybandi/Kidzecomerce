
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import './newarival-products.js';
import './cart-summary-styles.js';
import './order-summary.js';
import './cart-details.js';

class OrderConfirmation extends PolymerElement {
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

    // window.localStorage.clear(); //all items

    }

}

window.customElements.define('order-confirmation', OrderConfirmation);
