
// Import the Polymer library and html helper function
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

/**
 * @author
 * @class AddToCart
 * @event on-click
 * export class AddToCart for accessing the properties and methods in child class
 * objects type crate Array, Number, boolean, object
 * value boolean, string, function
 * item is arraylist, existingEntries, poductlist
 * type Number for cartquantity,cartCost, dellivarycharges, taxamount, summarytotalamount
 */
export class AddToCart extends PolymerElement {
  
  //properties section if rquired any
  static get properties() { return { 
    response: { type: Object },
    //item for list of the products
      item:{        
        type: Array,
        notify: true,
        value: null
      },
      //Existing entries products
      existingEntries:{   
        type: Array,
        value: null
      },
      //productlist list new array
      productlist:{       
        type: Array,
        value: null
      },
      //cartcost is the cort total amount
      cartCost:{      
        type: Number,
        value: null
      },
      //calculating for delivary carges based on cartcost
      dellivarycharges:{      
        type: Number,
        value: null
      },
      //calculating for Tax amount based on cartcost
      taxamount:{       
        type: Number,
        value: null
      },
       //order amount including delivary carges, tax and cartcost
      summarytotalamount:{     
        type: Number,
        value: null
      },
      cartquantity:{
        type: Number,
        value: null,
        notify: true,
        reflectToAttribute: true
      }
    }
  }
  ready() {
    super.ready();
  }

  addProduct(e) {
    this.item = this.$.itemList.itemForElement(e.target);
    this.$.selector.select(this.item);

    //setting the json data into localstorage using locastorage
    this.existingEntries = JSON.parse(localStorage.getItem("productsInLocalStore"));
    if (this.existingEntries == null) this.existingEntries = [];
    this.productlist = [];
  
    //product amount
    var totalamount = this.item.price * this.item.inCart;

    //adding products into the arraylist using array push
    this.productlist.push(this.item.image, this.item.title, this.item.price, this.item.inCart, totalamount, this.item.label,)
    // console.log(productlist);

    //updataing products itteration multiple products
    window.localStorage.setItem('CurrentList', JSON.stringify(this.productlist));

    //adding  products into existing products list
    this.existingEntries.push(this.productlist);
    //Finally store the all products using localstorage setitem
    window.localStorage.setItem("productsInLocalStore", JSON.stringify(this.existingEntries));

    //reload page once Sucessfully added to the cart 
    location.reload();

    /**
     * cartcost
     * using getItem get the price for the product
     * checking this.cartCost if exist add to product amount 
     * this.cartCost + this.item.price
     * if not exist add product price
     * setItem for totalamount for other component using
     * 
     */
    this.cartCost = window.localStorage.getItem('totalamount');
    if(this.cartCost != null){
      this.cartCost = parseInt(this.cartCost);
      window.localStorage.setItem("totalamount", this.cartCost + this.item.price); 
      } else{
        window.localStorage.setItem("totalamount", this.item.price);	
    }

    /**
    * Cart quantity
    * getItem using localstorage
    * checking condition if cart quantity exist or not
    * if cart quantity exist increment this.cartquantity one item
    * if not exist quantity add to this.cartquantity one
    * setItem cartqty in localstorage for accessing into other pages
    */
    this.cartquantity = window.localStorage.getItem('cartqty');
    if(this.cartquantity != null){
      this.cartquantity = parseInt(this.cartquantity);
      window.localStorage.setItem("cartqty", this.cartquantity + this.item.inCart); 
      } else{
      window.localStorage.setItem("cartqty", this.item.inCart);	
    }
  }  
}
//@customElement BestsellerProducts register to webbrowser
window.customElements.define('addto-cart', AddToCart);
