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
        <Link to='/Nationality'>Nationality</Link>
        <Link to='/Religion'>Religion</Link>
        <Link to='/Home Country'>Home Country</Link>
    </div> 
  </fieldset>
  {/*<iframe src="personnelsettings/Nationality.html" title="2" className="subsettingsbody" />*/}
</div>
</nav>
<Switch>
<Route path='/Nationality'>
    <PersonnelsettingsTemplate value='1' />
</Route>
<Route path='/Religion'>
    <PersonnelsettingsTemplate value='2' />
</Route>
<Route path='/Home Country'>
    <PersonnelsettingsTemplate value='3' />
</Route>

</Switch>
        </div>
        </Router>
    );
}

export default PersonnelSettings;
