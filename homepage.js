window.onload=function(){
	document.getElementById("Compose").onclick= compose_message;
}


function compose_message(){
	console.log("The on click works");
	var compose_panel=[
		'<div id ="compose_window">',
		'<div id="new_message">',
		'<div id="header"><strong> New Message </strong></div>',
		'</div>',
		'<form>',
		'<fieldset>',
		'<strong>To</strong><br> <input type="text" id ="recipient" name="recipient" class="textfield"> <br>',
		'<strong>Subject</strong><br> <input type="text" id="subject" name="subject" class="textfield"> <br><br>',
		'<strong>Message</strong><br> <textarea  id = "message_content" name="message_content" cols="40" rows="5"></textarea> <br>',
		'<button id="Send"> <strong> Send </strong> </button>',
		'</fieldset>',
		'</form>',
		'</div>',
		'<div id="Response"></div>',
		
	].join('');
	document.getElementById("pagecontent").innerHTML= compose_panel;
	document.getElementById("Send").onclick= insert_data;
	
}

function insert_data(){
    var rec = document.getElementById("recipient").value;
    var sub = document.getElementById("subject").value;
    var bod = document.getElementById("message_content").value;
    var req_mes = "message.php?recipient="+rec+"&subject="+sub+"&body="+bod;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState==4 && xmlHttp.status==200){
            var responseMessage = xmlHttp.responseText;
            document.getElementById("Response").innerHTML= responseMessage;
            alert(responseMessage);
            
        }
    };
    
    xmlHttp.open("POST",req_mes,true);
    xmlHttp.send();
    //var responseMessage = xmlHttp.responseText;
    //alert(responseMessage);
}