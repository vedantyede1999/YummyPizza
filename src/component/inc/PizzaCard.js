import React from "react";
import PizzaCard1 from '../images/PizzaCard1.jpg';
import PizzaCard2 from '../images/PizzaCard2.jpg';
import PizzaCard3 from '../images/PizzaCard3.jpg';
import PizzaCard4 from '../images/PizzaCard4.jpg';
import PizzaCard5 from '../images/PizzaCard5.jpg';
import PizzaCard6 from '../images/PizzaCard6.jpg';

function PizzaCard(){
    return(
        <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={PizzaCard1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Middle Eastern Supreme Cheese Burst Pizza</h5>
        {/* <p class="card-text">Oozing with a cheesy abundance! Feel the delicate Mediterranean flavours come alive in every bite with Falafels, Roasted Crunchy Veggies and Mozzarella Cheese on a soft 11-inch crust.</p> */}
        <button type="button" class="btn btn-dark" >ADD</button>
        <figure class="text-end">Rs. 200</figure>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={PizzaCard2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Farmfresh Supreme Cheese Burst Pizza</h5>
        {/* <p class="card-text">Every cheese-lovers dream! Made from handpicked farm-fresh veggies like American Corn, Crunchy Bells Peppers and Onion with Mozzarella Cheese on a soft 11-inch crust.</p> */}
        <button type="button" class="btn btn-dark">ADD</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={PizzaCard3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Famous Five Cheese Burst Pizza</h5>
        {/* <p class="card-text">Gooey deliciousness for your cheese-tooth! Relish our awesome five-some Tender Paneer Tikka, Jalapenos, Black Olives, American Corn & Onion with Mozzarella Cheese on a soft 11-inch crust.</p> */}
        <button type="button" class="btn btn-dark">ADD</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={PizzaCard4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Big Western Cheese Burst Pizza</h5>
        {/* <p class="card-text">An oh-so-cheesy wonder! A legendary combination of Barbeque Chicken, Sliced Chicken Meatballs, Onion and Mozzarella Cheese on a soft 11-inch crust.</p> */}
        <button type="button" class="btn btn-dark">ADD</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={PizzaCard5} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Kheema and Sausages Cheese Burst Pizza</h5>
        {/* <p class="card-text">Satisfy all your cheese cravings! East and West meet in this fine fusion of Tandoori Chicken Tikka and Sliced Chicken Meatballs with Onion and Mozzarella Cheese on a soft 11-inch crust.</p> */}
        <button type="button" class="btn btn-dark">ADD</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={PizzaCard6} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Mutton Overload Cheese Burst Pizza</h5>
        {/* <p class="card-text">A burst of cheese in every mouthful! Its a true delight for all meat lovers with Succulent Lamb Chunks and spicy, delicious Chicken Keema with Mozzarella Cheese on a soft 11-inch crust.</p> */}
        <button type="button" class="btn btn-dark">ADD</button>
      </div>
    </div>
  </div>
</div>
    );
}

export default PizzaCard;