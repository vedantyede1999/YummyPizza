import React from 'react';
import './login.css';
import PizzaCard1 from '../images/PizzaCard1.jpg';
import trash from '../images/trash.svg'


function CheckOut(props){
    return(
        <div className="container">
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <span class="navbar-text">CheckOut</span>
                </div>
            </nav>


            <section className="">
                <h1>Shopping Cart</h1>
                <p className="total-items">You have <span>7</span> item in cart</p>

                <div class='productDiv'>
                    <div class='row align-items-center'>
                        <div class="col">
                        <img src={PizzaCard1} alt="pizza" width="200px" />
                        </div>

                        <div class="col">
                            <h2>Pizza</h2>
                        </div>

                        {/* <div class="row align-items-center"> */}
                            {/* <div class="col"><i>+</i></div> */}
                        <div class="col"><input type='text' /></div>
                            {/* <div class="col"><i>-</i></div> */}
                        {/* </div> */}

                        <div class="col">
                            <h3>2000rs</h3>
                        </div>

                        <div class="col">
                            <img src={trash} alt="trash" width='50px'/>
                        </div>
                    </div>
                </div>
            </section>
            <button>Place Order</button>
        </div>
    );
}

export default CheckOut;