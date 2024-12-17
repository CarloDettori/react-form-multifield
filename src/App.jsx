import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import MainComponent from './components/MainComponent'
import MyForm from "./components/myForm";
import './App.css'

function App() {

  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <MyForm />
      <FooterComponent />

    </>

  )
}

export default App