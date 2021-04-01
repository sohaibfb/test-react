import React, { Component } from 'react';

class PersonnelsettingsTemplate extends Component {
    render() {
        return (
            <div>
<div className="subsettingsheader">
  <form className="form-style-3" action="../../addsettings.php" method="post">
    <div className="actionbar"><img id="addsettingsbtn" height={35} src="../../../images/images.png" width={52} />
      <input id="addsetttingbtn" name="submit" type="submit" defaultValue="save" height={35} width={52} /></div>
    <input name="scode" id="scode" type="hidden" defaultValue={this.props.value} />
    <table id="settings">
      <tbody><tr>
          <th>del</th>
          <th>code</th>
          <th>English Description</th>
          <th>Arabic Description</th>
        </tr>
      </tbody><tbody id="tbody">
        <tr>
          <td>del</td>
          <td>code</td>
          <td>English Description</td>
          <td>Arabic Description</td>
        </tr>
      </tbody>
    </table>
    <div name="ShowEmployeeData" id="data" />
  </form>
</div>

                



            </div>
        );
    }
}

export default PersonnelsettingsTemplate;
