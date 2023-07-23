import './App.css';
import Navbar from './components/navbar/Navbar'
import Brands from './components/brands/Brands'
import GetStarted from './components/get-started/GetStarted'
import Home from './containers/home/Home'
import Hotels from './containers/hotels/Hotels'
import Value from './containers/value/Value'
import Contact from './containers/contact/Contact'
import Footer from './containers/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Brands />
      <Hotels />
      <Value />
      <Contact />
      <GetStarted />
      <Footer/>
    </>
  );
}

export default App;



// https://real-estate-web.pages.dev/#residencies


//http://localhost:3000/#home