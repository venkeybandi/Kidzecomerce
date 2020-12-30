
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class ProductDetails extends PolymerElement {
  static get template() {
    return html`
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    
      <style include="shared-styles">
        :host {
          display: block;
        }
        .container{
          width: 80%!important;
        }
        .pr-details{
          margin: 50px 0;
      }
      .productdetails{
          margin-top: 50px;
      }
      
      .productimage img{
          width: 100%;
      }
      .pr-title{
          font-weight: 800;
          font-size: 36px;
          margin-bottom: 0px;
      }
      .pr-price{
          padding: 10px 0 5px;
          font-size: 26px;
          font-weight: 600;
          margin-top: 0px;
          margin-bottom: 0px;
      }
      .pr-price span{
          font-size: 16px;
          position: relative;
          top: -5px;
          font-weight: 500;
      }
      .pr-price .small{
          width: 20px;
      }
      .pr-color{
        margin: 0;
      }
      .pr-color span{
          font-size: 14px;
          font-weight: 600;
      }
      .pr-addtocart{
          width: auto;
          display: block;
          opacity: 1;
          padding: 10px 60px;
          font-size: 18px;
          font-weight: 700;
          margin-top: 25px;
          text-decoration: none;
          background-color: var(--royalblue);
          transition: all .3s ease-in-out;
          /*opacity: 0;*/
          display: block;
          cursor: pointer;
          text-align: center;
          color: #fff;
      }
      .pr-addtocart:hover, .pr-addtocart:active, .pr-addtocart:focus{
          background-color: blue;
          color: #fff;
      }
      .pr-description{
          top: 90px;
          padding-left: 15px;
      }
      .pr-description ul{
      }
      
      .pr-description ul li{
          padding-bottom: 10px;
          letter-spacing: .32px;
      }
      @media (max-width: 768px){
        .pr-details {
          margin: 10px;
        }
        .container {
          width: 100%!important;
        }
        .productdetails {
          margin-top: 10px;
        }
        .pr-title {
          margin: 0;
        }
      }
      @media (max-width: 600px){
        .pr-details {
          margin: 0px;
        }
        .productimage{
          margin-left: -12px;
          margin-right: -12px;
        }
      }
      </style>
      <section class="pr-details">
      <div class="container">
        <div class="row">
            <div class="col m6 s12">
              <div class="productimage">
                <img src="./src/images/pic1.jpg" alt="product image">
              </div>
            </div>
            <div class="col m6 s12 ">
            <div class="productdetails">
            <h2 class="pr-title">Gray Tshirt</h2>
            <h3 class="pr-price"><span>Price: <iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>650.00</h3>
            <p class="pr-color"><span>Color: </span>Pink</p>
            <a href="javascript:;" class="add-cart pr-addtocart">Add cart</a>
        </div>
        <div class="pr-description">
          <ul>
            <li>t is a long established fact that a reader will be distracted by </li>
            <li>the readable content of a page when looking at its layout</li>
            <li>t is a long established fact that a reader will be distracted by </li>
            <li>the readable content of a page when looking at its layout</li>
            <li>t is a long established fact that a reader will be distracted by </li>
            <li>the readable content of a page when looking at its layout</li>
          </ul>
        </div>
            </div>
        </div>
      </div>
      </section>
       
    `;
  }
}

window.customElements.define('product-details', ProductDetails);
