
// @import base class addto-cart and create ProductsPage class
//  extends using inheritence AddToCart 
// Import the Polymer library and html helper function
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import './shared-styles.js';
import './shared-products-style.js';
import { AddToCart } from './addtocart-operations.js';

// Define the new element as a class
// child-element renders its light DOM children inside this compnent
class ProductsPage extends AddToCart {
  // Provide a DOM template for the element
  static get template() {

    // Tag the returned template literal with the html helper function
    // to convert it into an instance of HTMLTemplateElement
    return html`
      <style include="shared-styles shared-products-style">
        .products-sec{
          background: var(--light-theme-background-color);
          margin: 0 50px 50px;
        }
        .product-container{
          margin-top: 50px;
          padding-bottom: 10px;
        }
      </style>

    <div class="products-sec">
      <iron-ajax 
        auto 
        url="./src/data/products.json" 
        handle-as="json" 
        last-response="{{response}}">
      </iron-ajax>

      <div class="products-container"> <!-- products-container start-->
      <!--using iron-ajax response and do-repeat displaying json data and using one-way data binding-->
          <template is="dom-repeat"  id="itemList" items="[[response.results]]" as="item" grid>
            <div class="image" title="[[item.title]]" tabindex="0">
              <span class="labeltag" title="[[item.label]]" tabindex="0">[[item.label]]</span>
              <a href="[[rootPath]]productdetails" role="link" title="[[item.title]]">
                <img class="img" id="img" src='[[item.image]]' alt='[[item.title]]' tabindex="0"></img>
              </a>
              <h3 id="title" class="title" title="[[item.title]]" role="title" tabindex="0">[[item.title]]</h3>
              <h4 id="price" class="price" title="price [[item.price]]" tabindex="0"><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>[[item.price]]</h4>
              <input type="submit" on-click="addProduct" role="button" class="add-cart" value="Add Cart "></input>
            </div>
         
          </template>
          
          <!-- Using  array-selector we are going to push the product details into arraylist -->
          <array-selector id="selector" items="{{response.results}}" selected="{{selected}}" multi toggle></array-selector>
      </div>
    </div>
    <promo-banner1></promo-banner1>
    `;
    }
}
//@customElement BestsellerProducts register to webbrowser
customElements.define('products-page', ProductsPage);
