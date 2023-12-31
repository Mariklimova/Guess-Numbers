// Описание проекта:
// программа генерирует случайное число в диапазоне от 1 до 100 и просит пользователя угадать
// это число. Если догадка пользователя больше случайного числа, то программа должна вывести
// сообщение 'Слишком много, попробуйте еще раз'. Если догадка меньше случайного числа, то
// программа должна вывести сообщение 'Слишком мало, попробуйте еще раз'. Если пользователь
// угадывает число, то программа должна поздравить его и вывести сообщение 'Вы угадали,
// поздравляем!'.
// Составляющие проекта:
// Целые числа; Переменные; Ввод / вывод данных; Условный оператор; Цикл; Бесконечный цикл;
// Операторы break, continue; Работа с модулем random для генерации случайных чисел; Функции.



// 1
// let num = Math.round(Math.random() * 100);

// function guessNumber(num) {
//     let start = 1;
//     let end = 100;
//     for (let i = start; i < end; i++) {
//         const middle = prompt(`'Введите любое число от '${start}' до '${end}`);
//         if (middle == num) {
//             alert('ПОЗДРВЛЯЮ! ВЫ УГАДАЛИ!');
//             break
//         } else if (middle > num) {
//             end = middle;
//             alert('Слишком много, попробуйте еще раз');
//         } else if (middle < num) {
//             start = middle;
//             alert('Слишком мало, попробуйте еще раз');
//         }
//     }

// }
// guessNumber(num);


// 2
class GuessNum {
    guessNumber(num) {
        let start = 1;
        let end = 100;
        for (let i = start; i < end; i++) {
            const middle = prompt(`'Введите любое число от '${start}' до '${end}`);
            if (middle == num) {
                alert('ПОЗДРВЛЯЮ! ВЫ УГАДАЛИ!');
                break
            } else if (middle > num) {
                end = middle;
                alert('Слишком много, попробуйте еще раз');
            } else if (middle < num) {
                start = middle;
                alert('Слишком мало, попробуйте еще раз');
            }
        }

    }
}
const guessNum = new GuessNum();
const num = Math.round(Math.random() * 100);
guessNum.guessNumber(num);