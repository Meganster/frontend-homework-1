'use strict';

const anagram = function (array) {
    // отсортируем входной массив по алфавиту
    array.sort();
    
    // будет хранить массивы слов
    // которые являются анаграммами
    const anagramsObject = {};

    array.forEach( word => {
  	// sortedWord будет хранить упорядоченный регистронезависимый 
        // набор букв из которых состоит слово
        // для этого разбиваем слово на буквы, сортируем и соединяем все обратно
        const sortedWord = word.toLowerCase().split('').sort().join('');
    
        // создаст массив для ключа sortedWord 
        // если он еще не был создан
        if (anagramsObject[sortedWord] == undefined) {
            anagramsObject[sortedWord] = [];
        }

        // добавляем новое слово в массив
        anagramsObject[sortedWord].push(word);
    });

    const resultArr = [];
    // теперь в anagramsObject для каждого ключа
    // находится массив анаграмм 
    for (const key in anagramsObject) {
        // отсеем все массивы в которых ровно 1 слово
        // т.е. нет анаграмм
        if (anagramsObject[key].length > 1) {
            resultArr.push(anagramsObject[key]);
        }
    }

	return resultArr;
}
