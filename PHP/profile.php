<?php
require 'config.php';

$username = $_POST['username'];
$age = $_POST['age'];
$dob = $_POST['dob'];
$contact = $_POST['contact'];

$stmt = $mysqli->prepare("UPDATE users SET age = ?, dob = ?, contact = ? WHERE username = ?");
$stmt->bind_param("ssss", $age, $dob, $contact, $username);
$stmt->execute();
$stmt->close();

echo 'Profile updated successfully';
?>
