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
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
