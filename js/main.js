// c сайта https://api.jquery.com/ready/
// если работаем с jQuery то нужно провеять готовность элементов на странице, те доступны ли все элемаенты этой функции
$( document ).ready(function() {
	$('.owl-carousel').owlCarousel({
		// эти настройки берем из документации слайдера Это значит что в нашем документе дб класс .owl-carousel к нему будет применена эта функция .owlCarousel со следующими параметрами
		// loop:true,
		// прокручивается бесконечно это можно убрать
    margin:20,
		// отступ между элементами слайдера 10
    nav:true,
		// навигация есть
		navClass: ['slider__nav--left', 'slider__nav--right'],
		// задавая новые классы мы снимаем стилизацию кнопок из библиотеки и присвоив эти классы теперь кнопки можно стилизовать navClass взяли с сайта библиотеки где прописаны классы
    responsive:{
        0:{
            items: 1
        },
        700:{
            items: 2
        },
        900:{
            items: 3
        },
				1200:{
						items: 4
				},
    }
		// настройки для адаптива по 1 по 3 по 4 слайдера в зависимости от экрана
})
});


const menuBtn = document.querySelector('.m-menu');
// задаем кнопку menuBtn(сщздав новую переменную)-имя кнопки = нунжно найти в документе по селектору

const menu = document.querySelector('.nav');
// для того чтобы при клике на эту кнопку появлялся класс .active (тоесть отображался скрытый .menu-sidebar)

menuBtn.addEventListener('click', function(){
		// при клике на menuBtn отслеживаем события (addEventlistener - прослушиватель событий) при клике чтоб выполнилась определенная анонимная функция
		menu.classList.toggle('active');
		// функция чтобы menu поменяла свой класс При помощи свойства classList мы обращаемся ко всем классам которые есть у блока const menu (т.е. у .menu-sidebar) и если там есть класс active, то функция toggle его уберет, еслт нет то она его добавит. это как выключатель-при заходе в комнату, если свет уже включен то нажав на выключатель мы его выключим и наоборот - так работает toggle=вкл/выкл
});
