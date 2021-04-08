import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import SubsettingsTemplate from './SubsettingsTemplate';
import Iframe from './../../Iframe';

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
                        <Route path='/Nationality'>
                            <SubsettingsTemplate value='1' />
                        </Route>
                        <Route path='/Religion'>
                            <SubsettingsTemplate value='2' />
                        </Route>
                        <Route path='/Home Country'>
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
