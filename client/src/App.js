import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/other/ScrollToTop';
//layout
import NavMenu from './components/layout/NavMenu';
import Alerts from './components/layout/Alerts'
//pages
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
//auth pages
import Register from './components/auth/Register'
import Login from './components/auth/Login'
//style
import './styles/App.scss';
//analytics
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
//context
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utils/setAuthToken'
//animation
if(localStorage.token){
  setAuthToken(localStorage.token)
  }
function App() {
  const location = useLocation();
  return (
    <AlertState>
      <AuthState>
      <div className="App">
        {/* <Router history={history}> */}
        {/* <NavMenuState> */}
          
            <NavMenu currentPage={window.location.pathname} props></NavMenu>
            <ScrollToTop />
            <Alerts/>
          <Switch location={ location } key={location.key}>
              
              {/* <Route exact path='*' component={Maintenance}></Route> */}
              <Route exact path='/login' component={Register}></Route>
              <Route exact path='/register' component={Register}></Route>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/portfolio' component={Portfolio}></Route>
              <Route exact path='/resume' component={Resume}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/contact' component={Contact}></Route>
              <Route component={NotFound}></Route>
            </Switch>
            {/* <Footer></Footer> */}
         
        {/* </NavMenuState> */}
        </div>
      </AuthState>
    </AlertState>
  );
}

export default App;
