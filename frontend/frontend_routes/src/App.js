import './App.css';
import Navbar from './components/layouts/Navbar';
import Card from './components/layouts/Card';
import Login from './components/Login';
import Register from './components/Register';
import ResetPasswordOTP from './components/ResetPasswordOTP';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar/>

            <Routes>
              <Route path="/" exact element={ <Card /> }></Route>

              <Route path="/login/" component={ <Login /> } element={ <Login /> }></Route>

              <Route path="/register/" component={ <Register /> } element={ <Register /> }></Route>
              
              <Route path="/reset-password/" component={ <ResetPasswordOTP /> } element={ <ResetPasswordOTP /> }></Route>

            </Routes>
            
        </div>
    </BrowserRouter>
  );
}

export default App;
