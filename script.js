let userName = prompt("Введите имя");

if (userName === null || userName.trim() === "") {
    userName = "Анонимный пользователь";
}

alert("Здравствуй, " + userName + "!");

console.log("Скрипт запущен. Пользователь: ", userName);

