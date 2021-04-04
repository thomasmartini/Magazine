<?php

//Require functions for actions
require_once "webservice.php";

//Based on the existence of the GET parameter, 1 of the 2 functions will be called
if (!isset($_GET['id'])) {
    $data = getDishes();
} else {
    $data = getDishDetails($_GET['id']);
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Magazine!</title>
    <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>

<script type="text/javascript" src="main.js"></script>
</body>
</html>

