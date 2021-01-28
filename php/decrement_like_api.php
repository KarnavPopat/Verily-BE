<?php

	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'verily';

	// Create connection
	$connection = mysqli_connect($servername, $username, $password, $dbname);

	// Check connection
	if (mysqli_connect_errno()) {
		die("Connection failed: " . mysqli_connect_error(). " (" . mysqli_connect_errno() . ")");
	}

	$query = 'delete from likes where username="user 1"';

	$result = mysqli_query($connection, $query);
    if (!$result) {
    	die("deletion failed" . mysqli_error($connection));
    }

	mysqli_free_result($result);

	mysqli_close($connection);
?>
