import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SubsettingsTemplate from './SubsettingsTemplate';

const FinancialSettings = () => {
    return (
        <Router>
        <div>
            <nav>
           <div className="subsettingsheader">
  <fieldset>
    <div className="subsettingsmainmenu">
        <Link to='/Allowances'>Allowances</Link>
    </div> 
  </fieldset>
</div>
</nav>
<Switch>
<Route path='/Allowances'>
    <SubsettingsTemplate value='8' />
</Route>

</Switch>
        </div>
        </Router>
    );
}

export default FinancialSettings ;
