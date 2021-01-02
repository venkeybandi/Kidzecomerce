
// Import the Polymer library and html helper function
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

//export AddToCart class
export class AddToCart extends PolymerElement {
  
  //properties section if rquired any
  static get properties() { return { 
    response: { type: Object },
      item:{        //item for list of the products
        type: Array,
        value: null
      },
      existingEntries:{   //Existing entries products
        type: Array,
        value: null
      },
      productlist:{       //productlist list new array
        type: Array,
        value: null
      },
      cartCost:{      //cartcost is the cort total amount
        type: Number,
        value: null
      },
      dellivarycharges:{      //calculating for delivary carges based on cartcost
        type: Number,
        value: null
      },
      taxamount:{       //calculating for Tax amount based on cartcost
        type: Number,
        value: null
      },
      summarytotalamount:{      ////calculating order amount including delivary carges, tax and cartcost
        type: Number,
        value: null
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

        //alert message once Sucessfully added to the cart 
        window.alert(" Item Added Sucessfully");  
        location.reload();
        //calculating total products amount
        this.cartCost = window.localStorage.getItem('totalamount');

        //checking cart cost if exist
        if(this.cartCost != null){
          this.cartCost = parseInt(this.cartCost);
          window.localStorage.setItem("totalamount", this.cartCost + this.item.price); 
        } else{
          window.localStorage.setItem("totalamount", this.item.price);	
      }

       // =========starting claculating  Cart quantity===============
       this.cartquantity = window.localStorage.getItem('cartqty');
       //checking cart quantity if exist
       if(this.cartquantity != null){
         this.cartquantity = parseInt(this.cartquantity);
         window.localStorage.setItem("cartqty", this.cartquantity + this.item.inCart); 
       } else{
         window.localStorage.setItem("cartqty", this.item.inCart);	
     }
     // =========End Cart quantity===============
     
      
    }
       
        
  }

window.customElements.define('addto-cart', AddToCart);
