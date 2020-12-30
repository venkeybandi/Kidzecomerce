
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

       

class SliderHome extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        .slidershow{
          width: 100%;
          height: 500px;
          overflow: hidden;
        }
        .middle{
          position: relative;
        }
        .navigation{
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
        }
        .bar{
          width: 50px;
          height: 10px;
          border: 2px solid #fff;
          margin: 6px;
          cursor: pointer;
          transition: 0.4s;
        }
        .bar:hover{
          background: #fff;
        }
        
        input[name="r"]{
            position: absolute;
            visibility: hidden;
        }
        
        .slides{
          width: 500%;
          height: 500px;
          display: flex;
        }
        
        .slide{
          width: 20%;
          transition: 0.6s;
        }
        .slide img{
          width: 100%;
          height: 500px;
          animation: animate 10s linear infinite;
        }
        @media (max-width: 768px){
          .slidershow{
            height: auto;
          }
          .slides{
            height: auto;
          }
          .slide img{
            height: 100%;
          }
        }
        #r1:checked ~ .s1{
          margin-left: 0;
        }
        #r2:checked ~ .s1{
          margin-left: -20%;
        }
        #r3:checked ~ .s1{
          margin-left: -40%;
        }
        #r4:checked ~ .s1{
          margin-left: -60%;
        }
        #r5:checked ~ .s1{
          margin-left: -80%;
        }
        .slide {
          animation: slide 24s ease infinite;
        }
        
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          
          20% {
            transform: translateX(0%);
          }
          
          25% {
            transform: translateX(-100%);
          }
          
          40% {
            transform: translateX(-100%);
          }
          
          50% {
            transform: translateX(-200%);
          }
          
          70% {
            transform: translateX(-200%);
          }
          
          75% {
            transform: translateX(-300%);
          }
          
          85% {
            transform: translateX(-300%);
          }
          
          90% {
            transform: translateX(-400%);
          }
          
          95% {
            transform: translateX(-400%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        

        
      </style>

      <div class="slidershow middle">
        <div class="slides">
          <input type="radio" name="r" id="r1" checked>
          <input type="radio" name="r" id="r2">
          <input type="radio" name="r" id="r3">
          <input type="radio" name="r" id="r4">
          <input type="radio" name="r" id="r5">
          <div class="slide s1">
            <img src="./src/images/b6.jpg" alt="">
          </div>
          <div class="slide">
            <img src="./src/images/hb1.jpeg" alt="">
          </div>
          <div class="slide">
            <img src="./src/images/hb2.jpg" alt="">
          </div>
          <div class="slide">
            <img src="./src/images/hb3.jpg" alt="">
          </div>
          <div class="slide">
            <img src="./src/images/pr3.jpg" alt="">
          </div>
        </div>
      </div>


    `;
  }
}

window.customElements.define('slider-home', SliderHome);
