import React from "react";
import './login.css';
import history from "./history";

function LogIn(){
    return(
      <div className="container-sm">
      <form class="formClass">
      <h1>LogIn</h1>
      <br />
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Sign In</button>
  <br />
  <br />

  <h6>Don't have account ?</h6>
  <button type="submit" class="btn btn-primary" onClick={()=>history.push('/signUp')}>Sign Up</button>


</form>
</div>
    );
}

export default LogIn;