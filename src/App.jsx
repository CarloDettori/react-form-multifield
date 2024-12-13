import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import ButtonController from './components/ButtonController'
import HeaderController from './components/HeaderController'
import CardController from './components/CardController'
import FooterController from './components/FooterController'
import './App.css'
import MainController from './components/MainController'


function App() {

  return (
    <>
      <HeaderController />
      <MainController />
      <FooterController />
    </>
  )
}

export default App

