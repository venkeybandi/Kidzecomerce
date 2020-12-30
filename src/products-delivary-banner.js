
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
// col s12 m12 l12

class ProductsDelivaryBanner extends PolymerElement {
  static get template() {
    return html`
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

      <style include="shared-styles">
        :host {
          display: block;
        }
        .container{
          width: 90%!important;
        }
        .delivery-details-banner{
            background: #e1e1e1;
            position: relative;
        }
        .upper_bx{
          padding-top: 15px!important;
        }
        .upper_icon {
            padding: 0px 0;
            text-align: center;
            text-transform: uppercase;
            font-weight: 700;
        }
        .upper_icon p{
          margin: 0 0 20px 0;
        }
        .upper_icon .fa {
            width: 70px;
            height: 70px;
            background: #ec303f;
            border-radius: 50%;
            margin: 0 auto 12px;
            font-size: 27px;
            line-height: 60px;
            color: #fff;
            transition: all ease .4s;
            padding: 15px;
        }
        .row{
          margin-bottom: 0!important;
        }
      </style>


      <section class="delivery-details-banner">
        <div class="container">
            <div class="row">

                <div class="col s12 m3 upper_bx">
                    <div class="upper_icon">
                        <iron-icon class="fa" src = "./src/icons/whiteicons/security_white_36.png"></iron-icon>
                        <p>100% Secured<br>Payments</p>
                    </div>
                </div>
                <div class="col s12 m3 upper_bx">
                    <div class="upper_icon">
                    <iron-icon class="fa" src = "./src/icons/whiteicons/call_white_36.png"></iron-icon>
                        <p>Customer <br> Service</p>
                    </div>
				        </div>
                <div class="col s12 m3 upper_bx">
                    <div class="upper_icon">
                    <iron-icon class="fa" src = "./src/icons/whiteicons/schedule_white_36.png"></iron-icon>
                        <p>15 Days to Change<br>Your Mind</p>
                    </div>
                </div>
                <div class="col s12 m3 upper_bx">
                    <div class="upper_icon">
                    <iron-icon class="fa" src = "./src/icons/whiteicons/star_white_36.png"></iron-icon>
                        <p>Highest Quality<br>Guarantee</p>
                    </div>
				        </div>

            </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('products-delivary-banner', ProductsDelivaryBanner);

