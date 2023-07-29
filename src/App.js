import './App.css';
import React,{ useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ContextConsumer } from './Context/Context';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Context/Firebase';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage/SignInPage'
import Cartpage from './Pages/Cartpage/Cartpage';
import Navbar from './Components/Navbar/Navbar';
import CategoryBar from './Components/CategoryBar/CategoryBar'
import Footer from './Components/Footer/Footer';
import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetailsPage'
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';

const App = () => {  
  const [ , dispatch] = ContextConsumer()

  /* this listener listens to the login/logout events of the user 
    and runs only when the listener Dispatches the actions.
    It is put in App.js so it can listen from a global level
  */
  useEffect(() => {
    const reSubscribe = onAuthStateChanged(auth, (authUser) => {
      if(authUser){
        dispatch({
          type: 'set_user',
          user: authUser
        })} 
      else{
        dispatch({
          type: 'set_user',
          user: null
        })}
    })

    // detach and re-attach the listener if this component updates
    return () => reSubscribe();
  }, [dispatch])

  return (
    <>
      <Navbar/> 
      <CategoryBar/>
      <Routes> 
        <Route path='/' Component={HomePage}/>
        <Route path='/signin' Component={SignInPage}/>
        <Route path='/cart' Component={Cartpage}/>
        <Route path='/product-details' Component={ProductDetailsPage}/>
        <Route path='/checkout' Component={CheckoutPage}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
