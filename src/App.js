import './App.css';
import Navbar from './component/inc/Navbar';
import Home from './component/pages/Home';
import LogIn from './component/pages/LogIn';
import CheckOut from './component/pages/CheckOut';
import Footer from './component/inc/Footer';
import SignUp from './component/pages/SignUp';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import history from './component/pages/history';
import PizzaCard from './component/inc/PizzaCard';
import BrevegesCard from './component/inc/BrevegesCard';
import Dessert from './component/inc/Dessert';


function App() {
  return (
    <Router history={history}>
    <div>
      <Navbar />
      <Routes>
      <Route exact path='/home' element={<Home />}> </Route>
      <Route path="/login" element={<LogIn />}> </Route>
      <Route path="/check_out" element={<CheckOut />}> </Route>
      <Route path="/signUp" element={<SignUp />}> </Route>
      <Route path="/pizza" element={<PizzaCard />}> </Route>
      <Route path="/breveges" element={<BrevegesCard />}> </Route>
      <Route path="/dessert" element={<Dessert />}> </Route>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
