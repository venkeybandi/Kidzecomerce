
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class PromoBannerSecond extends PolymerElement {
  static get template() {
    return html`
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

      <style include="shared-styles">
        :host {
          display: block;
        }
        .promobanner1{
            width: 100%;
            height: 350px;
            overflow: hidden;
        }
        .promobanner1 img{
            width: 100%;
            height: 350px;
        }
        @media (max-width: 768px){
          .promobanner1{
            height: auto;
          }
          .promobanner1 img{
            height: auto;
          }
        }
      </style>

      <div class="promobanner1">
        <img src="./src/images/pr2.jpg" alt="promo banner home1"> 
      </div>
    `;
  }
}

window.customElements.define('promo-banner2', PromoBannerSecond);
