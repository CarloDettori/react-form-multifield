import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import MainComponent from './components/MainComponent'
import Form from "./components/Form";
import './App.css'

function App() {

  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <Form action="" />
      <FooterComponent />

    </>

  )
}

export default App