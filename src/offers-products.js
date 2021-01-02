// Import the Polymer library and html helper function
// Import the Polymer iron-ajax
// Import the Base class AddToCart form addto-cart component
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './shared-products-style.js';
import { AddToCart } from './addtocart-operations.js';

// Define the new element as a class
// child-element renders its light DOM children inside this compnent
class OffersProducts extends AddToCart {
   // Provide a DOM template for the element
  static get template() {

    // Tag the returned template literal with the html helper function
    // to convert it into an instance of HTMLTemplateElement
    return html`
    <style include="shared-products-style">
      /* import custom styles and included shared-products-style  */
      /* custom elements default to display: inline */

       .actuvalprice{ 
            position: relative;
            color: #8d8d8d;
            font-size: 14px;
        }
        .actuvalprice::after{
            content: "";
            width: 100%;
            height: 1px;
            background: #8d8d8d;
            position: absolute;
            bottom: 9px;
            left: 0;
        }
      </style>
      
      <!-- iron-ajax element declaratively exposes network request functionality to Polymer's data-binding system
       newarival-products json data.
       handle-as: Specifies what data must be stored in the response
        -->
        
      <div class="products-sec">
        <iron-ajax 
          auto 
          url="./src/offers-data/offers-data.json" 
          handle-as="json" 
          last-response="{{response}}"
          on-response="handleResponse">
        </iron-ajax>
        
        <h1 tabindex="0">Special Offers</h1>
        <div class="products-container"> <!-- products-container start-->
        
          <!--using iron-ajax response and do-repeat displaying json data and using one-way data binding-->
          <template is="dom-repeat"  id="itemList" items="[[response.results]]" as="item" grid>
            <div class="image" title="[[item.title]]" tabindex="0">
              <span class="labeltag" title="[[item.label]]" tabindex="0">[[item.label]]</span>
              <a href="[[rootPath]]productdetails" role="link">
                <img class="img" id="img" src='[[item.image]]' alt='[[item.title]]' tabindex="0"></img>
              </a>
              <h3 id="title" class="title" title="[[item.title]]" role="title" tabindex="0">[[item.title]]</h3>
              <h4 id="price" class="price" title="[[item.price]]" tabindex="0"><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>[[item.price]]</h4>
              <input type="submit" id="addtocart" on-click="addProduct" role="button" class="add-cart" value="Add Cart "></input>
            </div>
         
          </template>
          
          <!-- Using  array-selector we are going to push the product details into arraylist -->
          <array-selector id="selector" items="{{response.results}}" selected="{{selected}}" multi toggle></array-selector>
        
      </div> <!-- products-container end-->
      </div>
    `;
    }
  }

//@customElement BestsellerProducts register to webbrowser
window.customElements.define('offers-products', OffersProducts);
