import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
//import {IronValidatableBehavior} from '@polymer/iron-validatable-behavior/iron-validatable-behavior.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-label/iron-label.js';
import './shared-styles.js';

class CheckoutLogin extends PolymerElement {
    static get template() {
        return html `
       
        
        <style include="shared-styles">
            *{
                box-sizing: border-box;
            }
            :host {
            display: block;
            padding: 10px;
            font-family: "Roboto", "Noto", sans-serif;
            background: #f5f5f5;
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

                        <paper-input  label="Phone Number" placeholder="" name="phone" id="phone" required auto-validate pattern="[0-9]*" error-message="Please enter the Phone number">
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
                        <paper-input label="Pincode" name="pincode" id="pincode" pattern="[0-9]*" size="5"  required auto-validate error-message="Please enter the 5 digit area postal pincode">
                            <iron-icon icon="icons:room" slot="prefix"></iron-icon>
                        </paper-input>

                        <div class="payment-details"><h3>Payment Details</h3></div> 

                        <paper-input label="Card holder name" name="cardname" id="cardname"  required auto-validate error-message="Please enter the card holder name">
                            <iron-icon icon="icons:account-circle" slot="prefix"></iron-icon>
                        </paper-input>
                        <paper-input  label="Card number" name="cardno" id="cardno"  required auto-validate pattern="[0-9]*" size="16" error-message="Please enter the 16 digit credit or debit card number">
                            <iron-icon icon="icons:account-balance" slot="prefix"></iron-icon>
                        </paper-input>
                        <paper-input  mask="*" label="Card pin number" name="cardpin" id="cardpin" pattern="[0-9]*" size="4"  required auto-validate error-message="Please enter the 4 digit number">
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
    
    
    adddetails() {
        // Check browser support
        if (typeof(Storage) !== "undefined") {

            // creating variables for using form validations 
            var fname = this.$.fname.value;
            var lname = this.$.lname.value;
            var phone = this.$.phone.value;
            var email = this.$.email.value;

            var doorno = this.$.doorno.value;
            var street = this.$.street.value;
            var city = this.$.city.value;
            var state = this.$.state.value;
            var pincode = this.$.pincode.value;

            var cardname = this.$.cardname.value;
            var cardno = this.$.cardno.value;
            var cardpin = this.$.cardpin.value;

            // checking the condition if the value is null or empty it's throw's error

           if( fname !="" && lname !="" && phone !="" && email !="" &&doorno !="" && street !="" &&
           city !="" && state !="" && pincode !="" && cardname !="" && cardno !="" && cardpin !="") 
           {

                var existingEntries = JSON.parse(localStorage.getItem("customer-entries"));
                if (existingEntries == null) existingEntries = [];
                var customerlist = [];

                //using array updating customer details 
                customerlist.push(fname, lname, phone, email, doorno, street, city, state, pincode, cardname, cardno, cardpin);
                //using localstorage customer details
                window.localStorage.setItem('Current-Entry-List', JSON.stringify(customerlist));
                existingEntries.push(customerlist);
                window.localStorage.setItem("customer-entries", JSON.stringify(existingEntries));

                window.alert("Succesfully completed to place order...");
                
                //locating to the orderconfirmation page if successfully form submition
                window.location.href = "orderconfirm" ;
                return true;

            }

        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }
}

window.customElements.define('checkout-login', CheckoutLogin);
