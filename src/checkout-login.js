import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
//import {IronValidatableBehavior} from '@polymer/iron-validatable-behavior/iron-validatable-behavior.js';
//import '@polymer/iron-form/iron-form.js';
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
            paper-input {
                height: 50px;
                width: 45%;
                margin: 0 0px 30px;
                box-sizing: border-box;
            } 
            .place-btn{
                width: 100%;
                margin: 30px 0;
            }
            .paperbtn{
                position: relative;
                width: 260px;
                background-color: var(--royalblue);
                transition: all .3s ease-in-out;
                display: block;
                cursor: pointer;
                text-align: center;
                color: #fff;
                padding: 8px 0;
                border-radius: 4px;
                margin: 0 auto;
                text-decoration: none;
                border: none;
                font-size: 20px;
            }
            .paperbtn:hover{
                background-color: var(--app-primary-color);
            }
            form{
                display: flex;
                flex-wrap: wrap;
                padding: 0;
                margin: 0;
                position: relative;
                justify-content: space-between;
              }
            .shiping-title{
                width: 100%;
                background: var(--royalblue);
                color: #ffffff;
                padding: 10px;
                margin: 20px 0;
                text-transform: uppercase;
                font-size: 28px;
            }
            .address-details, .payment-details{
                display: block;
                width: 100%;
                margin: 20px 0;
                text-transform: uppercase;
            }
            .address-details h3, .payment-details h3{
                padding: 5px 10px;
                margin: 0;
                font-size: 18px;
                font-weight: 500;
                letter-spacing: .32px;                
                background: var(--royalblue);
                color: #ffffff;
            }
            .card{
                width: 80%;
                margin: 0 auto;
                margin-bottom: 15px;
            }
            @media (max-width: 768px) and (min-width: 641px) {
            
                
            }
            @media (max-width: 640px){
                paper-input {
                    width: 100%;
                    margin: 0 0px 30px;
                } 
                .shiping-title {
                    font-size: 26px;
                }
                .address-details h3, .payment-details h3{
                    font-size: 16px;
                    font-weight: 600;
                }
                .card{
                    width: 100%;
                }
              }
        </style>

        <div class="card">
            <div class="container">
                <h2 class="shiping-title">Shipping Details </h2>
                <iron-form>
                    <form id="customerdetails" method="POST" name="customerdetails" action="/orderconfirm">
                        <paper-input label="First name" name="fname" id="fname" required auto-validate error-message="Please enter the Full name"  autofocus>
                            <iron-icon icon="icons:account-circle" slot="prefix"></iron-icon>
                        </paper-input>

                        <paper-input label="Last Name" name="lname" id="lname" required auto-validate error-message="Please enter the surname">
                            <iron-icon icon="icons:account-circle" slot="prefix"></iron-icon>
                        </paper-input>

                        <paper-input type="tel" label="Phone Number" placeholder="" name="phone" id="phone" required auto-validate error-message="Please enter the Phone number">
                            <iron-icon icon="icons:settings-phone" slot="prefix"></iron-icon>
                        </paper-input>

                        <paper-input type="email"  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}" label="Email Id" name="email" id="email" required auto-validate error-message="Please enter the Email Id">
                            <iron-icon icon="mail" slot="prefix"></iron-icon>
                        </paper-input>

                        <div class="address-details"><h3>Shipping Address</h3></div> 

                        <paper-input label="Door Number" name="doorno" id="doorno" required auto-validate error-message="Please enter the Door number">
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
                        <paper-input type="number" label="Pincode" name="pincode" id="pincode"  required auto-validate error-message="Please enter the area postal pincode">
                            <iron-icon icon="icons:room" slot="prefix"></iron-icon>
                        </paper-input>

                        <div class="payment-details"><h3>Payment Details</h3></div> 

                        <paper-input label="Card holder name" name="cardname" id="cardname"  required auto-validate error-message="Please enter the card holder name">
                            <iron-icon icon="icons:account-circle" slot="prefix"></iron-icon>
                        </paper-input>
                        <paper-input type="number" label="Card number" name="cardno" id="cardno"  required auto-validate error-message="Please enter the credit and debit card number">
                            <iron-icon icon="icons:account-balance" slot="prefix"></iron-icon>
                        </paper-input>
                        <paper-input type="number" mask="*" label="Card pin number" name="cardpin" id="cardpin"  required auto-validate error-message="Please enter the Area pincode">
                            <iron-icon icon="icons:verified-user" slot="prefix"></iron-icon>
                        </paper-input>

                        <div class="place-btn">
                           <paper-button on-tap="adddetails" class="paperbtn">PLACE ORDER</paper-button> 
                        </div>
                    </form>
                </iron-form>
            </div>

        </div>
    `;
    }
    ready() {
        super.ready();

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
            
            if (fname==null || fname=="")
                {  
                    alert("First Name can't be blank");  
                    form.fname.focus();
                    return false;  
                    
                }else if(lname==null || lname=="")
                {  
                    alert("Last Name can't be blank");  
                    return false;  
                } else if(phone==null || phone=="" || phone == length > 10 )
                {  
                    alert("Phone number can't be blank");  
                    return false;  
                } 
                else if(email==null || email=="")
                {  
                    alert("Email can't be blank");  
                    return false;  
                } 

                else if(doorno==null || doorno=="")
                {  
                    alert("Address can't be blank");  
                    return false;  
                } 
                else if(street==null || street=="")
                {  
                    alert("street can't be blank");  
                    return false;  
                } 
                else if(city==null || city=="")
                {  
                    alert("city can't be blank");  
                    return false;  
                } 
                else if(state==null || state=="")
                {  
                    alert("state can't be blank");  
                    return false;  
                } 
                else if(pincode==null || pincode=="")
                {  
                    alert("Area pincode can't be blank");  
                    return false;  
                } 
                else if(cardname==null || cardname=="")
                {  
                    alert("card name can't be blank");  
                    return false;  
                } 
                else if(cardno==null || cardno=="")
                {  
                    alert("Card number can't be blank");  
                    return false;  
                } 
                else if(cardpin==null || cardpin=="")
                {  
                    alert("Card pin can't be blank");  
                    return false;  
                } 

           

                var existingEntries = JSON.parse(localStorage.getItem("customer-entries"));
                if (existingEntries == null) existingEntries = [];
                var customerlist = [];

                // var index = this.myArray.indexOf(item);
                // if (index != -1) {
                // this.splice('myArray', index, 1, )
                // }

                //using array updating customer details 
                customerlist.push(fname, lname, phone, email, doorno, street, city, state, pincode, cardname, cardno, cardpin)
                //using localstorage customer details
                window.localStorage.setItem('Current-Entry-List', JSON.stringify(customerlist));
                existingEntries.push(customerlist);
                window.localStorage.setItem("customer-entries", JSON.stringify(existingEntries));

                window.alert("Succesfully completed to place order...");
                
                //locating to the orderconfirmation page if successfully form submition
                window.location.href = "orderconfirm" ;
                return false;

           

        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }
}

window.customElements.define('checkout-login', CheckoutLogin);