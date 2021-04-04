import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PersonnelsettingsTemplate from './personnelsettings/PersonnelsettingsTemplate';
  import "./personnelsettings/PersonnelsettingsTemplate";

const PersonnelSettings = () => {
    return (
        <Router>
        <div>
            <nav>
           <div className="subsettingsheader">
  <fieldset>
    <div className="subsettingsmainmenu">
        <Link to='/PersonnelsettingsTemplate'>Nationality</Link>
        {/*<a href="personnelsettings/Nationality.html" target="subsettingsmainshow">Nationality</a> */}
      
      <a href="personnelsettings/Religion.html" target="subsettingsmainshow">Religion</a>
      <a href="personnelsettings/HomeCountry.html" target="subsettingsmainshow">Home Country</a>
    </div> 
  </fieldset>
  {/*<iframe src="personnelsettings/Nationality.html" title="2" className="subsettingsbody" />*/}
</div>
</nav>
<Switch>
<Route path='/PersonnelsettingsTemplate'>
    <PersonnelsettingsTemplate value='1' />
</Route>

</Switch>
        </div>
        </Router>
    );
}

export default PersonnelSettings;
