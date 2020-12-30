
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class FooterComponent extends PolymerElement {
  static get template() {
    return html`
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    
    <style include="shared-styles">
        footer{
            padding-top: 50px;
            background: #f6f6f6;
        }
        .app-cart-about{

        }
        .app-cart-links{

        }
        .app-cart-links ul li{
            margin-bottom: 5px;
        }
        .app-cart-links ul li a{
            color: var(--royalblue);
            -webkit-transition: all ease .4s;
        }
        .app-cart-links ul li a:hover{
            color: var(--darkblue);
            font-weight: 600;
        }
        .app-cart-copy-right{
            background: #ddd;
            padding: 5px;
            text-align: center;
        }
        .app-cart-copy-right p{
            margin: 0;
        }
        .foot-link-maintain{
            color: var(--royalblue);
            -webkit-transition: all ease .4s;
        }
        .foot-link-maintain:hover{
            color: var(--darkblue);
        }
        .container{
            width: 80%!important;
        }
        @media (max-width: 768px){
        
        }
        @media (max-width: 600px){
        
        }
      </style>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col m4 s12">
                        <div class="app-cart-about">
                            <h5>UniqueHire Consulting LLP</h5>
                            <p>the readable content of a page when looking at its layout 
                            the readable content of a page when looking at its layout
                            the readable content of a page when looking at its layout
                            the readable content of a page when looking at its layout </p>
                        </div>
                    </div>

                    <div class="col m4 s12 ">
                        <div class="app-cart-links">
                            <ul>
                                <li> <a name="home" href="[[rootPath]]home">Home</a> </li>
                                <li><a name="productdetails" href="[[rootPath]]productdetails">Product Details</a></li>
                                <li><a name="products" href="[[rootPath]]products">products</a></li>
                                <li> <a name="cart" href="[[rootPath]]cart">cart</a></li>         
                            </ul>
                        </div>
                    </div>

                    <div class="col m4 s12">
                        <div class="app-cart-location">
                            <address>
                            <h5>Address</h5>
                                <p>486, 1st Cross Rd, Aswath Nagar,</p>
                                <p>Marathahalli, Bengaluru, Karnataka 560037</p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="app-cart-copy-right">
                <p>All rights reserved and maintained by <a href="uniquehire.in" class="foot-link-maintain" role="link">uniquehire</a></p>
            </div>
        </footer>
    `;
  }
}

window.customElements.define('footer-component', FooterComponent);
