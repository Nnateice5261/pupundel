<?php
	// подключение к серверу СУБД
	$mysqli = new mysqli('localhost', 'root', '', 'db_great_museums_async');
	
	// формирование строки запроса
    $sql = "SELECT * FROM `publication` WHERE `id`='{$_GET["id"]}'";
	
    // выполнение запроса
	$result = $mysqli->query($sql);

	// извлечение результата запроса
	$row = $result->fetch_assoc();

	echo json_encode($row);