import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import './shared-styles.js';

class ProductsPage extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
    .products-sec{
      background: var(--light-theme-background-color);
      margin: 0 50px 50px;
    }
    .product-container{
      margin-top: 50px;
      padding-bottom: 10px;
  }
  .image{
      position: relative;
      overflow: hidden;
      margin: 0 20px 25px;
      padding: 5px;
      box-shadow: 0px 0px 4px #ccc;
      -webkit-transition: all ease .6s;
  }
  .image:hover{
      box-shadow: 0 0 17px 0 rgba(0,0,0,.3);
      cursor: pointer;
  }
  .image img{
      height: 240px;
      width: 180px;
  }
  .image iron-image{
      height: 240px;
      width: 180px;
  }
  iron-image .img{
    height: 240px;
      width: 180px;
  }
  .image h3{
      // padding: 10px 0;
      margin: 0;
  }
  .image h4{
      margin: 0;
  }
  .image h4 i{
      font-size:18px;
  }
  .small {
    --iron-icon-height: 20px;
    --iron-icon-width: 20px;
 }
  .add-cart{
      position: relative;
      width: 100%;
      background-color: var(--royalblue);
      transition: all .3s ease-in-out;
      /*opacity: 0;*/
      display: block;
      cursor: pointer;
      text-align: center;
      color: #fff;
      padding: 6px 0;
      margin: 10px 0;
      text-decoration: none;
      border-radius: 4px;
  }
  .add-cart:hover{
    background-color: var(--darkblue);
  }


    </style>

    <div class="products-sec">
      <iron-ajax 
        auto 
        url="./src/data/products.json" 
        handle-as="json" 
        last-response="{{response}}"
        on-response="handleResponse">
      </iron-ajax>
      
      <iron-list items="[[response.results]]" as="item" id="itemlist" scroll-target="document" selected-item="{{selectedItem}}" selection-enabled grid>
        <template>
          <div class="product-container">
            <div class="image">
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
    <promo-banner1></promo-banner1>
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

customElements.define('products-page', ProductsPage);
