
import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      :root{
        --royalblue: royalblue;
        --darkblue: #2355ea;
        --redcolor: #ec303f;
      }
      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }
      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

      app-header {
        color: #fff;
        background-color: var(--app-primary-color);
      }

      app-header paper-icon-button {
        --paper-icon-button-ink-color: white;
      }

      .drawer-list {
        margin: 0 20px;
      }

      .drawer-list a {
        display: inline-block;
        padding: 0 16px;
        text-decoration: none;
        color: #fff;
        line-height: 40px;
        font-size: 16px;
      }

      .drawer-list a.iron-selected {
        color:  #fff;
        font-weight: bold;
      }
      .cart{
        background: #ec303f;
        padding: 5px!important;
        border-radius: 50%;
      }
      @media (max-width: 600px){
        .drawer-list {
            margin: 0;
        }
        .drawer-list a {
          padding: 0 10px;
          line-height: 40px;
          font-size: 14px;
        }
        .cart {
          padding: 5px!important;
          line-height: 24px!important;
          font-size: 14px!important;
        }
        .cart .fa{
          height: 18px;
          width: 18px;
        }
      }
      [main-title]{
        font-size: 36px;
        font-weight: 900;
      }

      <!-- checkoutlogin page styles -->

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
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
