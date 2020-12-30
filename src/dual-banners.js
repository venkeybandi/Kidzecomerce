
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class DualBanners extends PolymerElement {
  static get template() {
    return html`
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .container{
          width: 100%!important;
        }
        .promo-banner img{
            width: 100%;
            height: 320px;    
        }
        @media (max-width: 600px){
            .promo-banner img{
              height: 100%;    
          }
        }
  
        </style>

        <section>
            <div class="container">
                <div class="promo-banner">
                    <div class="row">
                        <div class="col m6 s12">
                            <img src="./src/images/promo1.jpg" alt="promobanner1">
                        </div>
                        <div class="col m6 s12">
                            <img src="./src/images/01.jpg" alt="promobanner2">
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
      
    `;
  }
}

window.customElements.define('dual-banners', DualBanners);
