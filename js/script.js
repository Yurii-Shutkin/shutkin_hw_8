const yearOfBirth = +prompt ('Укажи год своего рождения');  // Вводим переменные для запроса информации у пользователя
const userCity = prompt ('Укажи, в каком городе живешь');
let userFavSport = prompt ('Какой твой любимый вид спорта ?');

const currentYear = 2021;  // Вспомогательные переменные
let userAge = currentYear - yearOfBirth;

let placeOfRes;
const city1 = 'Киев';
const city2 = 'Москва';
const city3 = 'Минск';

const sport1 = 'шахматы';
const sport2 = 'шашки';
const sport3 = 'покер';

if (yearOfBirth) {  // Определяем возраст пользователя, согласно условиям задачи.
    userAge = 'Твой возраст: ' + userAge;
} else {
    userAge = ('Жаль, что Вы не захотели ввести свой год рождения.');
}

if (userCity === city1) {  // Определяем город/страну пользователя, согласно условиям задачи
    placeOfRes = ('Ты живешь в столице ' + 'Украины');
} else if (userCity === city2) {
    placeOfRes = ('Ты живешь в столице ' + 'России');
} else if (userCity === city3) {
    placeOfRes = ('Ты живешь в столице ' + 'Белоруссии');
} else if (userCity !== '' && userCity !== null) {  // Проверяем поле на пустую строку
    placeOfRes = ('Ты живешь в городе ' + userCity);
} else {
    placeOfRes = ('Жаль, что Вы не захотели ввести свой город.');
}

if (userFavSport === sport1) {  // Определяем любимый вид спорта пользователя
    userFavSport = 'Круто! Хочешь стать Магнусом Карлсеном!';
} else if (userFavSport === sport2) {
    userFavSport = 'Круто! Хочешь стать Глебом Смертином!';
} else if (userFavSport === sport3) {
    userFavSport = 'Круто! Хочешь стать Дамианом Саласом!'   
} else if (userFavSport !== '' && userFavSport !== null) {
    userFavSport += ' - твой любимый вид спорта'
} else {
    userFavSport = 'Жаль, что Вы не захотели ввести свой любимый вид спорта.'
}

const total = alert ('1. ' + userAge + '\n' + '2. ' + placeOfRes + '\n' + '3. ' + userFavSport); // Выводим результат