
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class homepage extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        
      </style>
      
      <slider-home name="sliderhome"></slider-home>
      <newarival-products name="products"></newarival-products>
      <!-- <slider-carousel name="slidercarousel"></slider-carousel> -->
      <dual-banners></dual-banners>      
      <bestseller-products></bestseller-products>
      <promo-banner2></promo-banner2>
      <offers-products></offers-products> 
    `;
  }
}

window.customElements.define('home-page', homepage);
