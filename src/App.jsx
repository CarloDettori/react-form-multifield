import "bootstrap/dist/css/bootstrap.min.css";
import posts from "./data/posts.js";
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import MainComponent from './components/MainComponent'
import MyForm from "./components/myForm";
import PublishedPostComponent from "./components/PublishedPostComponent.jsx";
import './App.css'

function App() {

  return (
    <>
      <HeaderComponent />
      <MainComponent pubPosts={<PublishedPostComponent posts={posts} />} />
      <MyForm />
      <FooterComponent />

    </>

  )
}

export default App