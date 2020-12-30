/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-products-style">
  <template>
    <style>
    :host {
      display: block;

      padding: 10px;
    }
    h1{
      margin: 0 0 30px;
      color: #212121;
      font-size: 36px;
      text-align: center;
      text-transform: uppercase;
    }
    .products-sec{
      background: var(--light-theme-background-color);
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .product-container{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 50px;
      padding-bottom: 100px;
  }
  .image{
      position: relative;
      overflow: hidden;
      margin: 0 20px 25px;
      box-shadow: 0px 0px 4px #ccc;
      padding: 5px;
      -webkit-transition: all ease .4s;
  }
  .image:hover{
      box-shadow: 0 0 17px 0 rgba(0,0,0,.3);
  }
  .labeltag{
    position: absolute;
    background: #ec303f;
    padding: 2px 10px;
    font-size: 12px;
    right: 5px;
    color: #fff;
  }
  /*.image:hover{
      box-shadow: 0px 0px 4px #ccc;
      cursor: pointer;
  }*/
  .image img{
      height: 240px;
      width: 180px;
  }
  .image iron-image{
      height: 240px;
      width: 180px;
  }
  iron-image .img{
    height: 240px;
      width: 180px;
  }
  .image h3{
      // padding: 10px 0;
      margin: 0;
  }
  .image h4{
      margin: 0;
  }
  .image h4 i{
      font-size:18px;
  }
  .small {
    --iron-icon-height: 20px;
    --iron-icon-width: 20px;
 }
  .add-cart{
      position: relative;
      width: 100%;
      background-color: var(--royalblue);
      transition: all .3s ease-in-out;
      /*opacity: 0;*/
      display: block;
      cursor: pointer;
      text-align: center;
      color: #fff;
      padding: 8px 0;
      border-radius: 4px;
      margin: 10px 0 0;
      text-decoration: none;
      border: none;
      font-size: 16px;
  }
  .add-cart:hover{
    background-color: var(--darkblue);
  }
  @media (max-width: 768px){
    .products-sec {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
  @media (max-width: 600px){
    h1{
      font-size: 28px;
    }
  }
  
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
