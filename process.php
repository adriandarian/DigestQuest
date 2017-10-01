<?php
  session_start();

  ########################
  $name = $_POST['name'];
  ########################

  if ($name == $name) {
    header("Location: ./page-2.html")
  }

  $_SESSION["name"] = $name;

  header('Location: ./page-2.html')
 ?>
