import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/other/ScrollToTop';
//layout
import NavMenu from './components/layout/NavMenu';
//pages
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
//style
import './styles/App.scss';
//analytics
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
//context
import AuthState from './context/auth/AuthState'
function App() {
  return (
    <AuthState>
    <div className="App">
      {/* <Router history={history}> */}
      {/* <NavMenuState> */}
        <Router>
          <NavMenu currentPage={window.location.pathname} props></NavMenu>
          <ScrollToTop />
          <Switch>
            {/* <Route exact path='*' component={Maintenance}></Route> */}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/portfolio' component={Portfolio}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route component={NotFound}></Route>
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      {/* </NavMenuState> */}
      </div>
    </AuthState>
  );
}

export default App;
