import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import "./mastersettings/PersonnelSettings"
import PersonnelSettings from './mastersettings/PersonnelSettings';

class MasterSettings extends Component {
    render() {
        return (
            <Router>
            <div>
                <nav>
                
             <div className="settingsheaders">
  <fieldset>
    <div className="settingsmainmenu">
        <Link to='/PersonnelSettings'>Personnel Settings</Link>
      <a href="mastersettings/PersonnelSettings.html" target="settingsmainshow">Personnel Settings</a>
      <a href="mastersettings/EmployementSettings.html" target="settingsmainshow">Employment Settings</a>
      <a href="mastersettings/Financial Settings.html" target="settingsmainshow">Financial Settings</a>
      <a href="mastersettings/Classifications Settings.html" target="settingsmainshow">Classifications Settings</a>
      <a href="mastersettings/StructureSettings.html" target="settingsmainshow">Structure Settings</a>
    </div>
  </fieldset>
  {/*<iframe src="mastersettings/PersonnelSettings.html"  title="1" className="settingsbody" />*/}
</div>


</nav>

<Switch>
<Route path='/PersonnelSettings'>
    <PersonnelSettings/>
</Route>

</Switch>
            </div>
            </Router>
        );
    }
}

export default MasterSettings;
