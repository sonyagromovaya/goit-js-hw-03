'use strict'
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

//добавляет поле mood со значением 'happy'
user.mood = 'happy';
//заменяет значение hobby на 'skydiving'
user.hobby = 'skydiving';
//заменяет значение premium на false
user.premium = 'false';
//выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
const keys = Object.keys(user);
for(const key of keys){
    console.log(key,': ', user[key]);
};