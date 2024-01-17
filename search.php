<?php
$conn = mysqli_connect("localhost", "username", "password", "books_database");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get user input from the form
$search = $_GET['title'];
$sql = "SELECT * FROM books WHERE title = '$search'";

$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "Title: " . $row['title'] . "<br>";
        echo "Author: " . $row['author'] . "<br>";
    }
} else {
    echo "No results found for '$search'";
}
mysqli_close($conn);
?>
