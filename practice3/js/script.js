// функция - инициализация событий страницы
function fnIniEvents() {
	// по завершении загрузки DOM выполним:
	document.addEventListener("DOMContentLoaded", function() {
		//DOMContentLoaded - событие, когда загрузилось все DOM дерево, отличается от события load, которое срабатывает только п осле полной загрузки страницы
		// 1.-- выбор ссылок навигационного меню
		let a = document.querySelectorAll("nav.header__nav ul.nav__list li.nav__item a");
		// querySelectorAll метод возвращает ссылки на указанные в скобках элементы
		// 2.-- перебор ссылок, навешивание на каждую из ссылок события и его обработчика 
		for (item of a) {
			// item - обьект
			item.addEventListener("click", fnСontentLoader);
			//
		}

		// 3.-- инициализацию клика по первой ссылке (страница Главная)
		a[0].click();
	})	
} 

// функция - загрузчик контента
function fnСontentLoader() {
	// извлекаем атрибут href ссылки
	let href = this.getAttribute("href");

	// get-запрос к файлу response.php с передачей get-параметра href 
	let response = fetch('/server/response.php?href=' + href, {
		method: 'GET',
			headers: {
				'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
		} // что такое content type

	})
	
	// получаем ответ сервера (response.php)
	.then( resp => {
		return resp.json();
	})
	// пробрасываем ответ формата JSON дальше
	.then( data => {
		let html, title = "";

		// если запрос исходит от главной страницы или страницы "Города"
		if (data[0].page == "Главная" || data[0].page == "Города") {
// дата - массив ????
// че такое дата и почему мы не присваивали category а там уже музеи мира
			[title, html] = fnOutMain(data);
		
		// если запрос исходит от страницы "Живопись"
		} else if (data[0].page == "Живопись") {
			[title, html] = fnOutPainters(data);
		// иначе 
		} else {

			[title, html] = fnOutPublication(data);
		}

		// вставка заголовка и контента страницы
		document.querySelector(".header__title").innerHTML = title;
		document.querySelector("main.container").innerHTML = html;
	});

	// предотвращаем переход по ссылке
	event.preventDefault();
}

// функция - вывод главной страницы
function fnOutMain(data) {
	let title, html = "";

	html = data[0].text;
	title = data[0].category;

	return [title, html];
}

// функция - вывод публикаций (кроме главной страницы)
function fnOutPublication(data) {
	let title, html = "";

	for (item of data) {
		html += `
			<article>
				<div class="article">
					<h2 class="article__title">${item.title}</h2>
					<div class="article__float_left">
						<img class="article__img" width="500" src="/images/${item.image}">
						${item.text}
						<div class="article__links">
							<a href="${item.link}" class="article__link" target="_blank">Смотреть в источнике</a>
						</div>
					</div>
				</div>
			</article>
		`;
	}

	title = data[0].category;

	return [title, html];
}

// функция - вывод художников
function fnOutPainters(data) {
	let title, html = "";

	for (item of data) {
		let dates = item.dates.split("/");
		
		html += `
			<article>
				<div class="article">
					<h2 class="article__title">${item.title}</h2>
					<div class="article__float_left">
						<img class="article__img" width="500" src="/images/${item.image}"
							title="${item.title}">
						<div class="article__info">
							<p><span><b>Дата рождения:</b> ${dates[0]}</span></p>
							<p><span><b>Дата смерти:</b> ${dates[1]}</span></p>
							<p><span><b>Страна:</b> ${item.country}</span></p>
							<p><b>Работы художника находятся:</b>
							<ul>
								${item.museums}
							</ul>
							</p>
							${item.text}
						</div>
					</div>
				</div>
			</article>
		`;
	}

	title = item.category;

	return [title, html];
}