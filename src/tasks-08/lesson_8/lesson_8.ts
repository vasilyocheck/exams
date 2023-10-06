// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

import {Nu, Num} from "./lesson_8.test";

export const sum = (...nums: Array<number>): number => nums.reduce((a, n) => a + n);


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    const [x, y, z] = [a, b, c].sort((a, b) => b - a);
    return x === y && y === z ? '10'
        : x === y || y === z && y + z > x
            ? '01' : y + z > x && y !== z
                ? '11' : '00';
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export const getSum = (number: number):number => (number + '').split('').reduce((acc, n) => acc + Number(n), 0);


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

/*export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let evenSum = arr[0];
    let oddSum = 0;
    for (let i = 1; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }
    return evenSum > oddSum;
}*/

/*export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sumsToCompare = arr.reduce((acc, n, i) => {
        acc[i % 2 === 0 ? 0 : 1] += n;
        return acc;
    }, [0, 0])
    return sumsToCompare[0] > sumsToCompare[1];
}*/

export const isEvenIndexSumGreater = (arr: number[]): boolean => arr.reduce((a: number, n:number, i:number) => i % 2 ? a + n : a - n) < 0;
//

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


/*export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return array.filter(n => n > 0 && n % 1 === 0).map(n => n ** 2);
}*/

export const getSquarePositiveIntegers = (a: Nu): Nu => a.filter(n => n > 0 && n % 1 === 0).map(n => n ** 2);

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

/*export function sumFirstNumbers(N: number): number {
    return N * (N + 1) / 2;
}*/
export const sumFirstNumbers = (N: number): number => N * (N + 1) / 2;

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let tempAmountOfMoney = amountOfMoney;
    let loopInitial = banknotes.findIndex(b => b <= amountOfMoney);
    const resultArr: number[] = [];
    for (let i = loopInitial; i < banknotes.length; i++) {
        if (tempAmountOfMoney / banknotes[i] >= 1) {
            let emptyArr = (Array(Math.floor(tempAmountOfMoney / banknotes[i]))).fill(banknotes[i]);
            resultArr.push(...emptyArr);
            tempAmountOfMoney -= emptyArr.reduce((acc, n) => acc + n);
        }
    }
    return resultArr;
}