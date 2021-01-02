
// Import the Polymer library and html helper function
// Import the Polymer app-drawer-layout
// Import the Polymer app-drawer
// Import the Polymer app-header-layout
// Import the Polymer app-header
// Import the Polymer iron-pages
// Import the Polymer app-route
// Import the Polymer iron-selector
// Import products-page, checkout-login, footer-component.js, order-confirmation

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import './products-page.js';
import './order-confirmation.js';
import './checkout-login.js';
import './footer-component.js';
import './shared-styles.js';



// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

// Define the new element as a class
class MyApp extends PolymerElement {
   ready() {    
       super.ready();
        //  something that requires access to the shadow tree
        //  Cart quantity
         this.cartquantity = window.localStorage.getItem('cartqty');
   }
   // Provide a DOM template for the element
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;
          display: block;
        }
      </style>
      
      
      <!-- app-location is an element that provides synchronization between the browser location bar
      and the state of an app -->

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>
      
      
      <!-- app-route: for implementation of routing -->
      <!-- pattern: reads the href property., hence set the page (pattern="/:page") 
      property in static get property to read its data -->

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
     
      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
         <app-drawer id="drawer">
         
        </app-drawer> 

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <div main-title="app-title" title="kidz" role="logo" tabindex="0">KidZ</div>
                <div class="nav-links-top">
                  <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
                    <a name="home" href="[[rootPath]]home" role="link">Home</a>
                    <a name="products" href="[[rootPath]]products" role="link">products</a>
                    <a name="cart" class="cart" href="[[rootPath]]cart" role="link">
                      <iron-icon class="fa" icon="icons:shopping-cart"></iron-icon>
                      <span id="cartValue" title="cart quantity {{cartquantity}}" tabindex="0">{{cartquantity}}</span>
                    </a>
                  </iron-selector>
                </div> 
            </app-toolbar>
          </app-header> 

          
          <!-- iron-pages: Basically page switcher to load required component on demand In app-route.-->
          <!-- selected: Data binding helps to get changed page value -->
          <!-- attr-for-selected: It reads value of name attr defined in each component & matches 
               with selected value and triggers page switch -->
          <!-- fallback-selection: for 404., page/component not found handling -->
          
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main" fallback-selection="404">
              <home-page name="home"></home-page>
              <products-page name="products"></products-page>
              <cart-details name="cart"></cart-details>              
              <checkout-login name="login"></checkout-login>
              <order-confirmation name="orderconfirm"></order-confirmation>
              <my-view404 name="view404"></my-view404>
          </iron-pages>

          <!-- Default componets on every page -->
          <products-delivary-banner></products-delivary-banner>
          <footer-component name="footer"></footer-component>

        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      // define a property ..
      page: {
        type: String,
        reflectToAttribute: true,
        // specify an observer to be invoked when the property changes ...
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

 
  

  /* observer: Its a simple observer (basically a watch which holds current value & old value) 
     that triggers whenever data changed in page property. 
     We read the observer and calls a function to grab its earlier */
  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'home' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'home';
    } else if (['home', 'productdetails','products','cart','orderconfirm', 'login', 'footer'].indexOf(page) !== -1) {
      this.page = page || home;
    } else {
      this.page = 'view404';
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }

  }

  _pageChanged(page) {
    // Import the page component on demand.
    
    switch (page) {
      case 'home':
        import('./home-page.js');
        break;
      case 'cart':
        import('./cart-details.js');
        break;
      case 'productdetails':
        import('./product-details.js');
        break;
      case 'products':
        import('./products-page.js');
        break;
      case 'login':
        import('./checkout-login.js');
        break;
      case 'orderconfirm':
        import('./order-confirmation.js');
        break;
      case 'footer':
      import('./footer-component.js');
      break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }


}

//registering into the webbrowser using cusomelement
window.customElements.define('my-app', MyApp);
