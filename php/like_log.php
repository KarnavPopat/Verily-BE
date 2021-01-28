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

	$query = 'insert into likes(timestamp, username, count) values("1970-01-02 00:00:05", "user 1", 00004)';
	$result = mysqli_query($connection, $query);
    if(!$result) {
    	die("insertion failed" . mysqli_error($connection));
    }

	$query = 'select * from likes where count = 00004 order by count desc';
	$result = mysqli_query($connection, $query);
	if (!$result) {
		die("selection failed");
	}

	while($row = mysqli_fetch_row($result)) {
		var_dump($row);
		echo ("<hr/>");
	}

	mysqli_free_result($result);

	mysqli_close($connection);
?>