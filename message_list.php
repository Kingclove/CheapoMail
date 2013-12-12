<table>
	<tr id="table_header">
		<th class ="header">From</th>
		<th class ="header">Subject</th>
		<th class ="header">Body</th>
	</tr>




<?php
	$con=mysqli_connect("127.8.14.1","chineyting", "" ,"cheapomail");
	if (!$con) {
		echo "Connection failed";
		return false;
	}

	if(isset($_COOKIE['username'])){
		$current_user = $_COOKIE['username'];
		$useridquery =  "SELECT id FROM user WHERE username = '$current_user'";
		$userres = mysqli_query($con,$useridquery);
		while($row=mysqli_fetch_array($userres)){
			$userid= $row['id'];
		
		}
		
		$messagestring="SELECT * from message where recipient_ids = ".$userid.";";
		$messagequery = mysqli_query($con,$messagestring);
		while($row2=mysqli_fetch_array($messagequery)){
		    $senderid= $row2['user_id'];
		    
		    $senderstring =  "SELECT username FROM user WHERE id = '$senderid'";
		    $senderquery = mysqli_query($con,$senderstring);
		    while($row3=mysqli_fetch_array($senderquery)){
		        $sender_username= $row3['username'];
		    }
			echo '<tr onclick="read();">';
			echo "<td>".$sender_username."</td>";
			echo "<td>".$row2['subject']."</td>";
			echo "<td>".$row2['body']."</td>";
			echo "</tr>";
		}
	}else{
	    echo"Not logged in";
	}
?>
</table>
