<?php
$servername = "127.0.0.1";
$username = "root";
$password = "mysql";
$db = "memory_database";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT `type` FROM `types`";
$result = $conn->query($sql);

$types = $result->fetch_all(MYSQLI_ASSOC);



$jason = [];

foreach ($types as $type) {
	$jason[] = $type['type'];
};

$json = json_encode($jason);

echo $json;

$conn->close();

?>