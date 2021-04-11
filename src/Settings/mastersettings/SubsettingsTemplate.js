import React, { Component,useState,useEffect } from 'react';

function SubsettingsTemplate (props){

const [engname, setenglishname] = useState("");


useEffect(() => {
  var Value= document.getElementById('scode').value;
  var data=new FormData();
//var Value= document.getElementById('scode').value;


data.append('code',Value);

  fetch('loadsettings.php', {
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(data),
  }).then(response => response.json()).then(data1 => {
    document.getElementById("tbody").innerHTML = data1;
  }).catch((error) => {
    console.error('Error:', error);
  });

  var xhttp=new XMLHttpRequest();
  
  xhttp.onreadystatechange=function() {
  
      if(this.readyState==4 && this.status==200){
  
          document.getElementById("tbody").innerHTML=this.responseText;
         
      }

    
      
  };
  
  xhttp.open("POST","../loadsettings.php",true);
  xhttp.send(data);
});

  function handleClick() {
    var Value= document.getElementById('scode').value;
    var table = document.getElementById("tbody");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    // cell1.innerHTML="<input type='text'/>"
    var cell2 = row.insertCell(1);
    var cell3;
    //var functionflag=0;
   // functionflag= document.getElementById('functionflag').value;

       if(Value==6){
     cell3=row.insertCell(2);
     var xhttpdepartment=new XMLHttpRequest(); 
    xhttpdepartment.onreadystatechange=function() {

      if(this.readyState==4 && this.status==200){

      cell3.innerHTML=this.responseText;  //"<input type='text', name='arabicdesctext11'/>";

    }

    };

      xhttpdepartment.open("POST","../../loaddepartmentsettings.php",true);
     xhttpdepartment.send();
     }
    var cell4 = row.insertCell(-1);
    var cell5 = row.insertCell(-1);
    cell4.innerHTML = "<input type='text', name='engdesctext'/>";

    cell5.innerHTML = "<input type='text', name='arabicdesctext'/>";




  }

  function handlesubmit(){
   
   
      // POST request using fetch inside useEffect React hook
    //  const requestOptions = {
      //  method: 'POST',
        //headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({ title: 'React Hooks POST Request Example' })
      //};
      //fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        //.then(response => response.json())
        //.then(data => setPostId(data.id));

      // empty dependency array means this effect will only run once (like componentDidMount in classes)
    

    
  }
 
    return (
      <div>
        <div className="subsettingsheader">
          <form className="form-style-3" action="../../addsettings.php" method="post">
            <div className="actionbar"><img id="addsettingsbtn" alt="pic" height={35} src="../../images/images.png" width={52} onClick={handleClick} />
              <input id="addsetttingbtn" name="submit" type="submit" onSubmit={handlesubmit} defaultValue="save" height={35} width={52} /></div>
            <input name="scode" id="scode" type="hidden" value={props.value} />
            <table id="settings"> 
              <tbody><tr>
                <th>del</th>
                <th>code</th>
                <th>English Description</th>
                <th>Arabic Description</th>
              </tr>
              </tbody>
              <tbody id="tbody">

              </tbody>
            </table>
            <div name="ShowEmployeeData" id="data" />
          </form>
        </div>





      </div>
    );
  
}

export default SubsettingsTemplate;
