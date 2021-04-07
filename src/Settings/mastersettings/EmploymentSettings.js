import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PersonnelsettingsTemplate from './personnelsettings/PersonnelsettingsTemplate';
  import "./personnelsettings/PersonnelsettingsTemplate";

const EmploymentSettings = () => {
    return (
        <Router>
        <div>
            <nav>
           <div className="subsettingsheader">
  <fieldset>
    <div className="subsettingsmainmenu">
        <Link to='/Positions'>Positions</Link>
       
    </div> 
  </fieldset>
  {/*<iframe src="personnelsettings/Nationality.html" title="2" className="subsettingsbody" />*/}
</div>
</nav>
<Switch>
<Route path='/Positions'>
    <PersonnelsettingsTemplate value='4' />
</Route>


</Switch>
        </div>
        </Router>
    );
}

export default EmploymentSettings;
