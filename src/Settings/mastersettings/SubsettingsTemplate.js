import React, { Component } from 'react';

class SubsettingsTemplate extends Component {

  
  constructor(props){
  super(props)
  this.state={}
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){

    var table =document.getElementById("tbody");
    var row = table.insertRow();
    var cell1=row.insertCell(0);
   // cell1.innerHTML="<input type='text'/>"
    var cell2=row.insertCell(1);
    var cell3;
    //var functionflag=0;
    //functionflag= document.getElementById('functionflag').value;
   
 //   if(Value==6){
   //  cell3=row.insertCell(2);
    // var xhttpdepartment=new XMLHttpRequest(); 
     //xhttpdepartment.onreadystatechange=function() {
    
   //   if(this.readyState==4 && this.status==200){
  
     //   cell3.innerHTML=this.responseText;  //"<input type='text', name='arabicdesctext11'/>";
         
      //}
  
    //};
    
  //  xhttpdepartment.open("POST","../../loaddepartmentsettings.php",true);
   // xhttpdepartment.send();
   // }
    var cell4=row.insertCell(-1);
    var cell5=row.insertCell(-1);
    cell4.innerHTML="<input type='text', name='engdesctext'/>";  
    
    cell5.innerHTML="<input type='text', name='arabicdesctext'/>";
    



  }
    render() {
        return (
            <div>
<div className="subsettingsheader">
  <form className="form-style-3" action="../../addsettings.php" method="post">
    <div className="actionbar"><img id="addsettingsbtn" alt="pic" height={35} src="../../images/images.png" width={52} onClick={this.handleClick} />
      <input id="addsetttingbtn" name="submit" type="submit" defaultValue="save" height={35} width={52} /></div>
    <input name="scode" id="scode" type="hidden" defaultValue={this.props.value} />
    <table id="settings">
      <tbody><tr>
          <th>del</th>
          <th>code</th>
          <th>English Description</th>
          <th>Arabic Description</th>
        </tr>
      </tbody>
      <tbody id="tbody">
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

export default SubsettingsTemplate;
