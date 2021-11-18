import React from "react";
import BrevegesCard1 from '../images/BeveragesCard1.jpg';
import BrevegesCard2 from '../images/BeveragesCard2.jpg';

function BrevegesCard(){
    return(
        <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={BrevegesCard1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">SWIG Jeera Masala</h5>
        {/* <p class="card-text"></p> */}
        <button type="button" class="btn btn-dark">ADD</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={BrevegesCard2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">SWIG Green Apple</h5>
        {/* <p class="card-text"></p> */}
        <button type="button" class="btn btn-dark">ADD</button>
      </div>
    </div>
  </div>
</div>
    );
}

export default BrevegesCard;