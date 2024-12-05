<?php
	// подключение к серверу СУБД
	$mysqli = new mysqli('localhost', 'root', '', 'db_great_museums_async');

	// формирование строки запроса 
	$sql = "SELECT * FROM `publication` WHERE `page`='{$_GET["href"]}'";

	// выполнение запроса
	$result = $mysqli->query($sql);

	// извлечение из результирующего набора строк в асссоциативный массив
	$row = $result->fetch_all(MYSQLI_ASSOC);

	// упаковываем массив в JSON-формат
	// отправляем ответ клиенту
	echo json_encode($row);
		
	// строка извлечена в массив
	// echo "<pre>";
	// var_dump($row);
	// echo "</pre>";