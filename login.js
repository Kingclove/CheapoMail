window.onload = function(){

}


function validate(){
	var username = $("username").value;
	var password = $("password").value;
	console.log("Got the values");
    var responseMessage;
	var requeststring = "login.php?username="+username+"&password="+password;
	var getstuff = new XMLHttpRequest();
	getstuff.onreadystatechange = function(){
        if(getstuff.readyState==4 && getstuff.status==200 ){
           responseMessage = getstuff.responseText;
           console.log(responseMessage);
           if (responseMessage=="fail") {
               document.getElementById("login_status").innerHTML= "<strong> Login Failed </strong>";
                
            }else if(responseMessage=="pass"){
                document.getElementById("login_status").innerHTML= "<strong> Login Success </strong>";
                window.location.href="homepage.html";
                
            }
           
           
        }
	};
	getstuff.open("get",requeststring ,true);
    getstuff.send();
    
    
    
};