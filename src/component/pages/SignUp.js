import React from "react";
import history from "./history";
import './login.css';

function SignUp(){
    return(
        <div className="container">
        <form>
        <h1>SignUp</h1>
        <br />
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">First Name</label>
    <input class="form-control" type="text" aria-label="default input example"/>
  </div>
  <div class="mb-3">
    <label  class="form-label">Last Name</label>
    <input class="form-control" type="text" aria-label="default input example"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <br /><br />
  <p>Already have Account?</p>
  <button type="submit" class="btn btn-primary" onClick={()=>history.push('/login')}>Login</button>

</form>
</div>
    )
}

export default SignUp;