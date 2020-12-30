
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
          padding-bottom: 100px;
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
          position: relative;
          left: -35px;
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
          padding: 10px 0px;
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
        padding: 30px 15px 50px;
        width: 380px;
        margin: 0 auto;
        margin-top: 75px;
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
    @media (max-width: 768px){
      
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
      .product span{
          position: relative;
          left: 5px;
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
        margin-bottom: 100px;
        padding: 15px;
        }
        .ordersummary{
            padding: 30px 15px 50px;
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
