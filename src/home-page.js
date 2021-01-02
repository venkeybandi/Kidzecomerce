
// Import the Polymer library and html helper function
// Import the component newarival-products
// Import the component bestseller-products
// Import the component slider-home
// Import the component banners-promos
// Import the component offers-products
// Import the component products-delivary-banner

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './newarival-products.js';
import './bestseller-products.js';
import './slider-home.js';
import './banners-promos/promo-banner2.js';
import './offers-products.js';
import './dual-banners.js';
import './products-delivary-banner.js';
import './shared-styles.js';

/**
 * using reusable components creats home page for 
 * landing brand promotions image slider <slider-home>
 * Upcomming products component <newarival-products>
 * Dual banner for promotion component <dual-banners>
 * Best seller products componet <bestseller-products>
 * single image promo banner <promo-banner2>
 * Offerce and price drop component <offers-products>
 */
// Define the new element as a class
class homepage extends PolymerElement {
   // Provide a DOM template for the element
  static get template() {
    return html`
      <style include="shared-styles">
        
      </style>
      
      <slider-home name="sliderhome"></slider-home>
      <newarival-products name="products"></newarival-products>
      <dual-banners></dual-banners>      
      <bestseller-products></bestseller-products>
      <promo-banner2></promo-banner2>
      <offers-products></offers-products> 
    `;
  }
}

//registering into the webbrowser using cusomelement
window.customElements.define('home-page', homepage);
