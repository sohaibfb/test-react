import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PersonnelsettingsTemplate from './personnelsettings/PersonnelsettingsTemplate';
  import "./personnelsettings/PersonnelsettingsTemplate";

const ClassificationSettings = () => {
    return (
        <Router>
        <div>
            <nav>
           <div className="subsettingsheader">
  <fieldset>
    <div className="subsettingsmainmenu">
        <Link to='/Functions'>Functions</Link>
        <Link to='/Sections'>Sections</Link>
        <Link to='/Locations'>Locations</Link>
    </div> 
  </fieldset>
  {/*<iframe src="personnelsettings/Nationality.html" title="2" className="subsettingsbody" />*/}
</div>
</nav>
<Switch>
<Route path='/Functions'>
    <PersonnelsettingsTemplate value='5' />
</Route>
<Route path='/Sections'>
    <PersonnelsettingsTemplate value='6' />
</Route>
<Route path='/Locations'>
    <PersonnelsettingsTemplate value='7' />
</Route>

</Switch>
        </div>
        </Router>
    );
}

export default ClassificationSettings;
