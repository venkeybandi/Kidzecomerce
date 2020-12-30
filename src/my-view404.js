/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class MyView404 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .pagr-404{
          background-image: url(http://127.0.0.1:8081/src/images/b4.jpg);
          background-repeat: no-repeat;
          background-position: top top;
          background-size: cover;
          width: 100%;
          height: 100vh;
          position: fixed;
          overflow: hidden;
          color: #fff;
        }
        .overlay{
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          right: 0;
          bottom: 0;
          padding: 0;
          margin: 0;
          background-color: rgb(10,10,10,0.3);
      }
      .oops-content{
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 50%;
            text-align: center;
        }
        p{
          width: 100%;
          font-size: 15rem;
          text-align: center;
          position: relative;
          margin: 0;
          text-shadow: 10px 10px 10px #0000007a;
        }
        span{
          position: relative;
          display: block;
          top: -80px;
          font-size: 20px;
        }
        a{
          position: relative;
          top: -30px;
          width: 100%;
          background-color: #fff;
          transition: all .3s ease-in-out;
          cursor: pointer;
          text-align: center;
          color: royalblue;
          padding: 10px 30px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1;          
          font-weight: 600;
        }
        @media (max-width: 768px){
          .pagr-404{
            background-image: url(http://127.0.0.1:8081/src/images/pic1.jpg);
            background-position: top center;
          }
          .oops-content{
            top: 40%;
            max-width: 100%;
          }
          p{
            width: 100%;
            font-size: 8rem;
            text-align: center;
            position: relative;
            margin: 0;
          }
          span{
            top: -50px;
            font-size: 16px;
          }
          a{
            top: -15px;
            
          }
        }
        .delivery-details-banner{
          display: none;
        }
      </style>
      <div class="pagr-404">
      <div class="overlay"></div>
      <div class="oops-content">
        <p>404</p>
        <span>Page Not Found</span>
        <a href="[[rootPath]]">Continue Shoping</a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('my-view404', MyView404);
