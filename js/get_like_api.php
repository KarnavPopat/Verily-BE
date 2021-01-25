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

	$query = 'select * from likes';

	$result = mysqli_query($connection, $query);
	if (!$result) {
		die("selection failed" . mysqli_error($connection));
	}

	$row_count = mysqli_num_rows($result);
	echo json_encode($row_count);

	mysqli_free_result($result);

	mysqli_close($connection);
?>
