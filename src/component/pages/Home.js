import React from 'react';
import Slider from '../inc/Slider';
import PizzaCard from '../inc/PizzaCard';
import BrevegesCard from '../inc/BrevegesCard';
import Dessert from '../inc/Dessert';

function Home(){
    return(
        <div>
        <Slider />
        <br />
        <h1>Pizza</h1>
        <br />
        <PizzaCard />
        <br />
        <h1>Breveges</h1>
        <br />
        <BrevegesCard />
        <br />
        <h1>Dessert</h1>
        <br />
        <Dessert />
        <br />

        </div>
        
    );
}

export default Home;