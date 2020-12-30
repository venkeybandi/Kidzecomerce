/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
// import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/iron-ajax/iron-ajax.js';
// import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-list/iron-list.js';
import './shared-styles.js';
import './shared-products-style.js';


class BestsellerProducts extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-products-style">
        
      </style>

      <div class="products-sec">
        <iron-ajax 
          auto 
          url="./src/bestseller-data/bestseller-data.json" 
          handle-as="json" 
          last-response="{{response}}"
          on-response="handleResponse">
        </iron-ajax>
        
        <h1>Best Seller</h1>
        <iron-list items="[[response.results]]" as="item" id="itemlist" scroll-target="document" selected-item="{{selectedItem}}" selection-enabled grid>
          <template>
            <div class="products-container">
              <div class="image">
              <span class="labeltag">[[item.label]]</span>
                <a href="">
                  <img class="img" src='[[item.image]]'></img>
                </a>
                <h3>[[item.title]]</h3>
                <h4><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>[[item.price]]</h4>
                <a href="Javascript:;" class="add-cart">Add cart</a>
              </div>
            </div>
          </template>
        </iron-list>
      </div>
    `;
  }


  static get properties() { return { 
    response: { type: Object },
      _isRequest:{
        type:Boolean,
        value:true
      }

    }
  }

  static get observers(){ return ['_checkLastResponse(response)'] }

  _checkLastResponse(r) {
          // we have received a response from iron-ajax so allow for next call
          if (r) {
                  this._isRequest = true;
          }
  }

  // As you provided above code, you call ajax manually. 
  _ajax_call() {
        if (this._isRequest) {

        this._isRequest = false; 
        setTimeout(()=> {
                this.$.request.generateRequest();
                
        },4000)}   
  }   

     handleResponse(r) {
       console.log(r)
     }
  }




window.customElements.define('bestseller-products', BestsellerProducts);
