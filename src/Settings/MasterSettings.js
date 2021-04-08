import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ClassificationSettings from './mastersettings/ClassificationSettings';
import EmploymentSettings from './mastersettings/EmploymentSettings';
import FinancialSettings from './mastersettings/FinancialSettings';
import "./mastersettings/PersonnelSettings"
import PersonnelSettings from './mastersettings/PersonnelSettings';
import StructureSettings from './mastersettings/StructureSettings';
import Iframe from './../Iframe';
import './../style.css';

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
                                    <Link to='/EmployementSettings'>EmployementSettings</Link>
                                    <Link to='/Financial Settings'>Financial Settings</Link>
                                    <Link to='/Classifications Settings'>Classifications Settings</Link>
                                    <Link to='/StrcutureSettings'>StructureSettings</Link>

                                </div>

                            </fieldset>


                            {/*<iframe src="mastersettings/PersonnelSettings.html"  title="1" className="settingsbody" />*/}

                            <div className="settingsbody" >
                                <Switch>
                                    <Route path='/PersonnelSettings'>
                                        <PersonnelSettings />
                                    </Route>
                                    <Route path='/EmployementSettings'>
                                        <EmploymentSettings />
                                    </Route>
                                    <Route path='/Financial Settings'>
                                        <FinancialSettings />
                                    </Route>
                                    <Route path='/Classifications Settings'>
                                        <ClassificationSettings />
                                    </Route>
                                    <Route path='/StrcutureSettings'>
                                        <StructureSettings />
                                    </Route>

                                </Switch>
                            </div>
                        </div>
                    </nav>




                </div>
            </Router>
        );
    }
}

export default MasterSettings;
