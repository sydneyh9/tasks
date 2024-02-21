/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    const first = numbers.find(
        (number: number): boolean =>
            numbers.indexOf() === 1 ||
            numbers.indexOf() === 2 ||
            numbers.indexOf() === 3 ||
            numbers.indexOf() === 4 ||
            numbers.indexOf() === 5 ||
            numbers.indexOf() === 6 ||
            numbers.indexOf() === 7 ||
            numbers.indexOf() === 8 ||
            numbers.indexOf() === 9 ||
            numbers.indexOf() === -1 ||
            numbers.indexOf() === -2 ||
            numbers.indexOf() === -3 ||
            numbers.indexOf() === -4 ||
            numbers.indexOf() === -5 ||
            numbers.indexOf() === -6 ||
            numbers.indexOf() === -7 ||
            numbers.indexOf() === -8 ||
            numbers.indexOf() === -9
    );
    const last = numbers[numbers.length - 1];
    let newArray: number[] = [];
    const arrayFirst = [...newArray];
    arrayFirst.splice(0, 0, first);
    arrayFirst.splice(1, 0, last);
    return arrayFirst;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const isValidNumber = (number: number): boolean =>
        number.charAt(0) !== "1" &&
        number.charAt(0) !== "2" &&
        number.charAt(0) !== "3" &&
        number.charAt(0) !== "4" &&
        number.charAt(0) !== "5" &&
        number.charAt(0) !== "6" &&
        number.charAt(0) !== "7" &&
        number.charAt(0) !== "8" &&
        number.charAt(0) !== "9" &&
        number.charAt(0) !== "-";
    const stringSort = numbers.map((number: string): string =>
        isValidNumber(number) ? number === 0 : number
    );
    const stringInteger = stringSort.map((number: string): string =>
        Number(number)
    );
    return stringInteger;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollarSort = amounts.map((amount: string): string =>
        amount.charAt(0) === "$" ? amount.replace("$", "") : amount
    );
    const isValidNumber = (amount: number): boolean =>
        amount.charAt(0) !== "1" &&
        amount.charAt(0) !== "2" &&
        amount.charAt(0) !== "3" &&
        amount.charAt(0) !== "4" &&
        amount.charAt(0) !== "5" &&
        amount.charAt(0) !== "6" &&
        amount.charAt(0) !== "7" &&
        amount.charAt(0) !== "8" &&
        amount.charAt(0) !== "9";
    const numberSort = dollarSort.map((amount: string): string =>
        isValidNumber(amount) ? amount === 0 : amount
    );
    const stringToDollar = numberSort.map((amount: string): string =>
        Number(amount)
    );
    return stringToDollar;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const isQuestion = (message: string): boolean =>
        message.charAt(message.length - 1) === "?";
    const arrayed = messages.filter(isQuestion);
    const isExclamation = (message: string): boolean =>
        messages.charAt(message.length - 1) === "!";
    const arrays = arrayed.map((message: string): string =>
        isExclamation(message) ? message === message.toUpperCase() : message
    );
    const newArray = [...arrays];
    return newArray;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const count = words.filter((word: string): boolean => word.length < 4);
    return count.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const isValidColor = (color: string): boolean =>
        color === "red" || color === "blue" || color === "green";
    const colorSort = colors.filter(isValidColor);
    if (colorSort.length === colors.length) {
        return true;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const math = addends.reduce(
        (total: number, number: number) => total + number,
        0
    );
    const result = addends.join("+");
    return "" + math + "=" + result;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
