import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SubsettingsTemplate from './SubsettingsTemplate';

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
                    

                    <Switch>
                        <Route key='nationality' path='/Nationality'>
                            <SubsettingsTemplate value='1' />
                        </Route>
                        <Route key='religion' path='/Religion'>
                            <SubsettingsTemplate value='2' />
                        </Route>
                        <Route  key='HomeCountry'path='/Home Country'>
                            <SubsettingsTemplate value='3' />
                        </Route>

                    </Switch>
                    </div>
                </nav>
            </div>
        </Router>
    );
}

export default PersonnelSettings;
