import logo from './logo.svg';
import './App.css';
import './style.css';
import  './LandingPage';
import LandingPage from './LandingPage';

function App() {
  return (
   <div className="App">
    
<div className="headerrow">
  <div className="mainmenu">
    <a href>Home</a>
    <div className="submenu">
      <button className="submenubtn">Settings</button>
      <div className="submenu-content">
        <a href="AdminSettings.php" target="mainshow">Admin Settings</a>
        <a href="MasterSettings.html" target="mainshow">Master Settings</a>
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
  
  
</div>

         
          



<iframe src={LandingPage} name="mainshow" className="bodydata"> </iframe>


    </div>
  );
}

export default App;
