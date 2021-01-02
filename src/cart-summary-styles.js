
import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="cart-summary-styles">

    <template>
        <style include="shared-styles">
            :host {
                display: block;
            }
            .container{
                width: 100%!important;
            }
        
            .products-container{
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                margin: 0 auto;
                margin-top: 20px;
            }
            
            .product-header{
                width: 100%;
                display: flex;
                justify-content: flex-start;
                border-bottom: 2px solid lightgrey;
                margin: 0 auto;
                font-size: 18px;
            }
            .product-header h5{
                font-size: 18px;
                font-weight: 500;
                margin: 0;
            }
            .product-title{
                width: 35%;
            }
            .product-header .price,
            .product-header .quantity,
            .product-header .total{
                border-bottom: 0;
            }
            .price{
                width: 15%;
                border-bottom: 2px solid lightgrey;
                display: flex;
                align-items: center;
            }
            .quantity{
                width: 25%;
                border-bottom: 2px solid lightgrey;
                display: flex;
                align-items: center;
            }
            .total{
                width: 25%;
                border-bottom: 2px solid lightgrey;
                display: flex;
                align-items: center;
            }
            .product{
                width: 35%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: 10px 0;
                border-bottom: 2px solid lightgrey;
            }
            
            .product span{
                position: absolute;
                font-size: 12px;
                width: 75px;
                background: #ec303f;
                color: #ffffff;
                place-self: flex-start;
                text-align: center;
            }
            .product i{
                cursor: pointer;
            }
            .products{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
            }
            .products img{
                width: 75px;
            }
            .totalContainer{
                display: flex;
                justify-content: flex-end;
                width: 100%;
                padding: 10px 0;
                font-size: 22px;
            }
            .totalTitle{
                width: 30%;
            }
            .totalvalue{
                width: 15%;
            }
            .totalContainer .finalamount{
                border-top: 1px solid #7f7f7f; 
                border-bottom: 1px solid #7f7f7f;
            }
            .place-btn{
                background-color: var(--royalblue);
                color: #fff;
                padding: 12px 0px;
                font-size: 22px;
                font-weight: 600;
                border: none;
                cursor: pointer;
                width: 100%;
            }
            .place-btn:hover, .place-btn:active, .place-btn:focus{
                background-color: var(--darkblue);
                color: #fff;
            }
            
            .order-summary{
                border: 1px solid #e1e1e1;
                background: #e1e1e1;
                width: 380px;
                margin: 0 auto;
                margin-top: 75px;
            }
            .orderSummary{
                padding: 30px 15px 50px;
            }
            .order-summary h1{
                font-size:28px;
                font-weight: 700;
                padding-bottom: 5px;
                margin: 0;
                margin-bottom: 25px;
                text-align: center;
                text-transform: uppercase;
                border-bottom: 1px solid #aaa;
            }
            .producttotal span{
                margin: 0;
                font-size: 18px;
                font-weight: 500;
                line-height: inherit;
                letter-spacing: .24px;
                display: inline-block;
                padding-bottom: 8px;
            }
            .producttotal span:nth-of-type(1){
                width: 60%;
            }
            .line4{
                border-top: 1px solid #aaa;
                border-bottom: 1px solid #aaa;
                margin-top: 20px;
            }
            .line4 span{
                font-size: 24px;
                font-weight: 600;
                padding: 10px 0;
                margin: 0;
            }
            tr {
                border-bottom: 0!important;
            }
            td, th {
                padding: 0!important;
            }

            .order-confirm h1 {
                font-size: 38px;
                font-weight: 700;
                letter-spacing: .64px;
                margin-bottom: 10px;
            }
            .order-confirm p{
                margin: 0;
            }
            .order-receipt{
                font-size: 32px;
                font-weight: 700;
                padding-bottom: 5px;
                margin-bottom: 50px;
                text-transform: uppercase;
                border-bottom: 2px solid #7f7f7f;
            }

            .customer-details, .shiping-address, .payment-details{
                margin-bottom: 30px;
                border-bottom: .5px solid royalblue;
                box-shadow: 1px 2px 5px #ccc;
                padding: 10px;
                cursor: pointer;
                -webkit-transition: all ease .4s;

            }
            .customer-details:hover, .shiping-address:hover, .payment-details:hover{
                box-shadow: 0px 0px 10px 0px #ccc;
            }
            .shiping-details h6{
                font-size: 20px;
                background: royalblue;
                color: #ffffff;
                padding: 6px;
                margin: 0 0 15px;
            }
            .shiping-details p{
                margin: 0;
                padding: 0;
            }
            .shiping-details p span{
                font-size: 18px;
                font-weight: 600;
            }
            strong{
                font-weight: 600!important;
            }
            .payment-details {
                margin: 0 0 20px 0;
            }
            .maskpin {
                text-security: disc;
                -webkit-text-security: disc;
                -moz-text-security: disc;
            }
            @media (max-width: 600px){
                .order-confirm h1 {
                    font-size: 28px;
                }
                .order-receipt {
                    margin: 20px 0;
                }
            }
            @media (max-width: 768px) and (min-width: 641px) {
                .order-summary {
                    width: 340px;
                }
                .checkout-btn {
                    width: 340px;
                }
            }
            @media (max-width: 600px){
                .products-container {
                    padding-bottom: 10px;
                }
                .product-header {
                    width: 95%;
                    font-size: 14px;
                }
                .products {
                    width: 95%;
                    margin: 0 auto;
                }
                .totalTitle{
                    width: 50%;
                }
                .totalvalue {
                    width: 25%;
                }
                .place-btn{
                    left: 50px;
                }

                .order-summary{
                    width: 100%;
                    margin-top: 0px;
                }
                .ordersummary{
                    padding: 15px;
                }
                .order-summary h1{
                    font-size: 28px;
                }
                .order-summary h4{
                    margin-bottom: 10px;
                    font-size: 16px;
                    font-weight: 600;
                }
                .order-summary h3{
                    border-top: 1px solid #7f7f7f;
                    border-bottom: 1px solid #7f7f7f;
                    padding: 10px 0;
                    font-size: 26px;
                    font-weight: 600;
                    margin-top: 20px;
                }
            }
            @media (max-width: 360px){
                .order-summary h1 {
                    font-size: 24px;
                }
                .line4 span{
                    font-size: 20px;
                    font-weight: 600;
                }
            }

            </style>
        </template>
    </dom-module>`;

document.head.appendChild($_documentContainer.content);
