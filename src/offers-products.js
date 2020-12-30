
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-list/iron-list.js';
import './shared-styles.js';
import './shared-products-style.js';


class OffersProducts extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-products-style">
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

      <div class="products-sec">
        <iron-ajax 
          auto 
          url="./src/offers-data/offers-data.json" 
          handle-as="json" 
          last-response="{{response}}"
          on-response="handleResponse">
        </iron-ajax>
        
        <h1>Special Offers</h1>
        <iron-list items="[[response.results]]" as="item" id="itemlist" scroll-target="document" selected-item="{{selectedItem}}" selection-enabled grid>
          <template>
            <div class="products-container">
              <div class="image">
              <span class="labeltag">[[item.label]]</span>
                <a href="[[rootPath]]productdetails">
                  <img class="img" src='[[item.image]]'></img>
                </a>
                <h3>[[item.title]]</h3>
                <h4><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>[[item.displayprice]] 
                <span class="actuvalprice">[[item.price]]</span>
                </h4>
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




window.customElements.define('offers-products', OffersProducts);
