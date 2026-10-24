// Создай объект user, у которого есть свойство name, но нет свойства pet. Попробуй получить имя питомца (user.pet.name) с использованием ?., чтобы код не упал с ошибкой. Выведи результат в консоль (должно быть undefined).
const user = {
  name: "Алексей"
};
console.log(user.pet?.name);


// Создай объект article, у которого есть массив tags с несколькими строками. Напиши код, который безопасно получает первый тег (article.tags?.[0]). Затем удали массив tags из объекта и проверь, что код всё равно работает и возвращает undefined, а не ошибку.
const article = {
  title: 'Изучаем JavaScript',
  content: 'Объекты и массивы в JS...',
  tags: ['javascript', 'программирование', 'веб-разработка']
};
delete article.tags;
console.log(article.tags?.[0]);


// Создай объект config, внутри которого есть settings, внутри settings есть theme, а внутри theme есть color. Напиши одну строку кода с ?., которая пытается достать color. Сделай так, чтобы в объекте config вообще не было свойства settings, и убедись, что ошибка не возникает.
const config = {
  settings: {
    theme: {
      color: 'dark' // или любое другое значение цвета
    }
  }
};
console.log(config.settings?.theme?.color);