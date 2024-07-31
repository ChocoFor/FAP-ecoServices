<?php
// api/products.php
$servername = "localhost";
$username = "root";
$password = "rootpassword";
$dbname = "eco_service";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, name, description, price FROM products";
$result = $conn->query($sql);

$products = [];

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $products[] = $row;
  }
}

echo json_encode($products);

$conn->close();
?>
