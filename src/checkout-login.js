// Import the Polymer library and html helper function
// Import the  Polymer iron-form
// Import the  Polymer iron-icons
// Import the  Polymer paper-input
// import shared-styles styles 

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import './products-delivary-banner.js';
import './shared-styles.js';

// Define the new element as a class CheckoutLogin
class CheckoutLogin extends PolymerElement {
    // Provide a DOM template for the element
    static get template() {
        return html `
       
        <style include="shared-styles">
            *{
                box-sizing: border-box;
            }
            :host {
            display: block;
            font-family: "Roboto", "Noto", sans-serif;
            background: #f5f5f5;
            padding-top: 15px;
            }
            
            @media (max-width: 600px){
                :host {
                    padding-top: 0px;
                }
                .card {
                    margin: 0;
                }
            }
        </style>

        <div class="card">
            <div class="container">
                <h2 class="shiping-title">Shipping Details </h2>
                <iron-form>
                    <form is = "iron-form" id="customerdetails" method="POST" name="customerdetails" action="/form/handler">
                        
                        <paper-input label="First name" name="fname" id="fname" required auto-validate error-message="Please enter the Full name"  autofocus>
                            <iron-icon icon="icons:account-circle" slot="prefix"></iron-icon>
                        </paper-input>

                        <paper-input label="Last Name" name="lname" id="lname" required auto-validate error-message="Please enter the surname">
                            <iron-icon icon="icons:account-circle" slot="prefix"></iron-icon>
                        </paper-input>

                        <paper-input  label="Phone Number" placeholder="" name="phone" id="phone" required auto-validate pattern="[0-9]{10}" maxlength="10" error-message="Please enter the Phone number">
                            <iron-icon icon="icons:settings-phone" slot="prefix"></iron-icon>
                        </paper-input>

                        <paper-input type="email"  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}" label="Email Id" name="email" id="email" required auto-validate error-message="Please enter the Email Id">
                            <iron-icon icon="mail" slot="prefix"></iron-icon>
                        </paper-input>

                        <div class="address-details"><h3>Shipping Address</h3></div> 

                        <paper-input label="Door Number" name="doorno" id="doorno" required auto-validate error-message="Please enter the house or office door number">
                            <iron-icon icon="icons:home" slot="prefix"></iron-icon>
                        </paper-input>
                        <paper-input label="Street address" name="street" id="street" required auto-validate error-message="Please enter the Street and landmark">
                            <iron-icon icon="icons:home" slot="prefix"></iron-icon>
                        </paper-input>

                        <paper-input label="City Name" name="city" id="city"  required auto-validate error-message="Please enter the city">
                            <iron-icon icon="icons:home" slot="prefix"></iron-icon>
                        </paper-input>

                        <paper-input label="State" name="state" id="state" required auto-validate error-message="Please enter the state">
                            <iron-icon icon="icons:home" slot="prefix"></iron-icon>
                        </paper-input>
                        <paper-input label="Pincode" name="pincode" id="pincode" pattern="[0-9]{6}" maxlength="6" required auto-validate error-message="Please enter the 6 digit area postal pincode">
                            <iron-icon icon="icons:room" slot="prefix"></iron-icon>
                        </paper-input>

                        <div class="payment-details"><h3>Payment Details</h3></div> 

                        <paper-input label="Card holder name" name="cardname" id="cardname"  required auto-validate error-message="Please enter the card holder name">
                            <iron-icon icon="icons:account-circle" slot="prefix"></iron-icon>
                        </paper-input>
                        <paper-input  label="Card number" name="cardno" id="cardno"  required auto-validate pattern="[0-9]{16}" maxlength="16" error-message="Please enter the 16 digit credit or debit card number">
                            <iron-icon icon="icons:account-balance" slot="prefix"></iron-icon>
                        </paper-input>
                        <paper-input type="password" label="Card pin number" name="cardpin" id="cardpin" pattern="[0-9]{4}" maxlength="4"  required auto-validate error-message="Please enter the 4 digit number">
                            <iron-icon icon="icons:verified-user" slot="prefix"></iron-icon>
                        </paper-input>

                        <div class="place-btn">
                            <input type="submit" value="PLACE ORDER" on-click="adddetails" class="paperbtn btn">
                        </div>
                    </form>
                </iron-form>
            </div>
        </div>
    `;
    }
    
    //properties section if rquired any
    static get properties() { return { 
        response: { type: Object },
        item:{        //item for list of the products
            type: Array,
            value: null
        },
        existingcustomer:{   //Existing entries products
            type: Array,
            value: null
        },
        customerlist:{       //productlist list new array
            type: Array,
            value: null
        },
        fname:{      //first name type string
            type: String,
            value: null
        },
        lname:{      //last name type string
            type: String,
            value: null
        },
        phone:{       //mobile number  type number
            type: Number,
            value: null
        },
        email:{      //mail id type string
            type: String,
            value: null
        },
        doorno:{      //home or office address type string
            type: String,
            value: null
        },
        street:{      //street type string
            type: String,
            value: null
        },
        city:{      //city type string
            type: String,
            value: null
        },
        state:{      //state type string
            type: String,
            value: null
        },
        pincode:{      //postal code type number
            type: Number,
            value: null
        },
        cardname:{      //card name type string
            type: String,
            value: null
        },
        cardno:{      //Debit or credit number type
            type: Number,
            value: null
        },
        cardpin:{      //Debit or credit pin type number
            type: Number,
            value: null
        }
        }
    }
    adddetails() {        

            // for  form validations 
            this.fname = this.$.fname.value;
            this.lname = this.$.lname.value;
            this.phone = this.$.phone.value;
            this.email = this.$.email.value;

            this.doorno = this.$.doorno.value;
            this.street = this.$.street.value;
            this.city = this.$.city.value;
            this.state = this.$.state.value;
            this.pincode = this.$.pincode.value;

            this.cardname = this.$.cardname.value;
            this.cardno = this.$.cardno.value;
            this.cardpin = this.$.cardpin.value;

            // checking the condition if the value is null or empty it's throw's error

           if( this.fname !="" && this.lname !="" && this.phone !="" && this.email !="" && this.doorno !="" && this.street !="" &&
           this.city !="" && this.state !="" && this.pincode !="" && this.cardname !="" && this.cardno !="" && this.cardpin !="") 
           {

                this.existingcustomer = JSON.parse(localStorage.getItem("customer-entries"));
                if (this.existingcustomer == null) this.existingcustomer = [];
                this.customerlist = [];

                //using array updating customer details 
                this.customerlist.push(this.fname, this.lname, this.phone, this.email, this.doorno, this.street, 
                    this.city, this.state, this.pincode, this.cardname, this.cardno, this.cardpin);

                //using localstorage customer details
                window.localStorage.setItem('Current-Entry-List', JSON.stringify(this.customerlist));
                this.existingcustomer.push(this.customerlist);
                window.localStorage.setItem("customer-entries", JSON.stringify(this.existingcustomer));
                window.localStorage.setItem('Current-Entry-List', JSON.stringify(this.customerlist));
                
                //locating to the orderconfirmation page if successfully form submition
                window.location.href = "orderconfirm" ;
                return true;

            }

    }
}

window.customElements.define('checkout-login', CheckoutLogin);
