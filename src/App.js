import './App.css';
import './style.css';
import './LandingPage';
import './AdminSettings';
import './Settings/MasterSettings';
import LandingPage from './LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminSettings from './AdminSettings';
import MasterSettings from './Settings/MasterSettings';

function App() {
  return (

    <Router>
      <div className="App">

        <nav>
          <div className="headerrow">
            <div className="mainmenu">


              <Link to="/" >Home</Link>

              <div className="submenu">
                <button className="submenubtn">Settings</button>
                <div className="submenu-content">
                  <Link to="/AdminSettings" >Admin Settings</Link>
                  <Link to="/MasterSettings" >MasterSettings</Link>

                  <a href="StructureSettings.php" target="mainshow">Structure Settings</a>
                </div>
              </div>
              <a href="Employee Profile.html" target="mainshow">Employee Profile</a>
              <div className="submenu">
                <button className="submenubtn">Transactions</button>
                <div className="submenu-content">
                  <a href>Financial Transactions</a>
                  <a href>Salary Process</a>
                  <a href>Voucher Process</a>
                </div>
              </div>
              <div className="submenu">
                <button className="submenubtn">Reports</button>
                <div className="submenu-content">
                  <a href>Personnel Reports</a>
                  <a href>Financial Reports</a>
                  <a href>Dynamic Reports</a>
                </div>
              </div>
            </div>


            {/*<iframe src={"/LandingPage"} title='bodydata' name="mainshow" className="bodydata"> </iframe>*/}

          
        
          <div className="bodydata">
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/AdminSettings" >
                <AdminSettings />
              </Route>
              <Route path="/MasterSettings">
                <MasterSettings />
              </Route>

            </Switch>
            
          </div>
        </div>
        </nav>






      </div>
    </Router>
  );
}

export default App;
