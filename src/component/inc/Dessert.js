import React from "react";
import DesertCard1 from '../images/DesertCard1.jpg';
import DesertCard2 from '../images/DesertCard2.jpg';
import DesertCard3 from '../images/DesertCard3.jpg';
import DesertCard4 from '../images/DesertCard4.jpg';

function Dessert(){
    return(
        <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={DesertCard1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Chocolate Crusted Cheesecake</h5>
        {/* <p class="card-text"></p> */}
        <button type="button" class="btn btn-dark">ADD</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={DesertCard2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Rich Red Velvet Pastry</h5>
        {/* <p class="card-text"></p> */}
        <button type="button" class="btn btn-dark">ADD</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={DesertCard3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Chocolate Truffle Pastry</h5>
        {/* <p class="card-text"></p> */}
        <button type="button" class="btn btn-dark">ADD</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={DesertCard4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Molten Lava Cake</h5>
        {/* <p class="card-text"></p> */}
        <button type="button" class="btn btn-dark">ADD</button>
      </div>
    </div>
  </div>
</div>
    );
}

export default Dessert;