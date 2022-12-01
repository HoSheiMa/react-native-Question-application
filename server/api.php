<?php

if (isset($_POST['token']) && isset($_POST['sql']) && $_POST['token'] == "1234567890") {
    $servername = "us-cdbr-east-06.cleardb.net";
    $username = "b531ac9c16a69b";
    $password = "deaf8c4c";
    $dbname = "heroku_4ad847d2e294279";
    $sql = $_POST['sql'];
    try {

        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


        $result = $conn->query($sql);
        $result = $result->fetchAll();

        echo json_encode($result);
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
}
