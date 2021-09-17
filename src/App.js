import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from './pages/Home';
import Album from './pages/Album';
import Artist from './pages/Artist';
import SideBar from "./components/SideBar"
import Footer from './components/Footer'
import { BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/' component={SideBar} />
      <Route path='/' component={Footer} />
      <Route exact path="/album/:id" component={Album} />
      <Route exact path='/artist/:id' component={Artist} />
    </Router>
  )
}

export default App
