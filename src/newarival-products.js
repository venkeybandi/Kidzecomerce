
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
// import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/iron-ajax/iron-ajax.js';
// import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-image/iron-image.js';
//import '@polymer/iron-list/iron-list.js';
import './shared-styles.js';
import './shared-products-style.js';
import '@polymer/polymer/lib/elements/array-selector.js';



class NewarivalProducts extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-products-style">
      .products-container{
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 50px;
      }
      </style>

      <!-- iron-ajax element declaratively exposes network request functionality to Polymer's data-binding system
       newarival-products json data.
       handle-as: Specifies what data must be stored in the response
        -->

      <div class="products-sec"> <!-- products-sec start -->
        <iron-ajax 
          auto 
          url="./src/newarival-data/newarival-products.json" 
          handle-as="json" 
          last-response="{{response}}"
          on-response="handleResponse">
        </iron-ajax>
        
        <h1>New Arrivals</h1>

        <div class="products-container"> <!-- products-container start-->
        
          <!--using iron-ajax response and do-repeat displaying json data and using one-way data binding-->
          <template is="dom-repeat"  id="itemList" items="[[response.results]]" as="item" grid>
            <div class="image" title="[[item.title]]">
              <span class="labeltag">[[item.label]]</span>
              <a href="[[rootPath]]productdetails">
                <img class="img" id="img" src='[[item.image]]' alt='[[item.image]]'></img>
              </a>
              <h3 id="title" class="title" title="[[item.title]]">[[item.title]]</h3>
              <h4 id="price" class="price"><iron-icon class="small" src = "./src/images/currency-inr.svg"></iron-icon>[[item.price]]</h4>
              <input type="submit" on-click="addProduct" class="add-cart" value="Add Cart "></input>
            </div>
          </template>

          <!-- Using  array-selector we are going to push the product details into arraylist -->
          <array-selector id="selector" items="{{response.results}}" selected="{{selected}}" multi toggle></array-selector>
        
      </div> <!-- products-container end-->

    </div> <!-- products-sec end -->

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
  ready() {
    super.ready();
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

    addProduct(e) {
           var item = this.$.itemList.itemForElement(e.target);
            this.$.selector.select(item);
            console.log(item);

            
              //setting the json data into localstorage using locastorage
              var existingEntries = JSON.parse(localStorage.getItem("productsInLocalStore"));
              if (existingEntries == null) existingEntries = [];
              var productlist = [];
            
              //product amount
              var totalamount = item.price * item.inCart;
              
              

              //adding products into the arraylist using array push
              productlist.push(item.image, item.title, item.price, item.inCart, totalamount)
              // console.log(productlist);

              //updataing products itteration multiple products
              window.localStorage.setItem('CurrentList', JSON.stringify(productlist));
              var newproperty = productlist.slice(3,5);
              window.localStorage.setItem('newproperty1', JSON.stringify(newproperty));
              newproperty.push(item.inCart, totalamount);
              //adding  products into existing products list
              existingEntries.push(productlist);
              //Finally store the all products using localstorage setitem
              window.localStorage.setItem("productsInLocalStore", JSON.stringify(existingEntries));

              //alert message once Sucessfully added to the cart 
              window.alert(" Item Added Sucessfully");
              
              //increment product quanty 
              e.model.set('item.inCart', e.model.item.inCart+1);  
        }

        
  }

window.customElements.define('newarival-products', NewarivalProducts);
