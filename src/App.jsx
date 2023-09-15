import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AppRouter from './router';
import Footer from './components/Footer/Footer';



function App() {

  return (
    <>
    <Router>
      <NavBar />
      <AppRouter />
      <Footer/>
    </Router>
    </>
  )
}

export default App
