<?php
require 'config.php';

$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $mysqli->prepare("SELECT password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->bind_result($hashed_password);
$stmt->fetch();
$stmt->close();

if (password_verify($password, $hashed_password)) {
    echo 'success';
} else {
    echo 'Invalid credentials';
}
?>
