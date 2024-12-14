import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import HeaderController from './components/HeaderController'
import FooterController from './components/FooterController'
import MainController from './components/MainController'
import './App.css'

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