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
    const last = numbers[numbers.length - 1];
    const newArray: number[] = [];
    const arrayFirst = [...newArray];
    arrayFirst.splice(0, 0, numbers[0]);
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
    /*const isValidNumber = (number: string): boolean =>
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
        isValidNumber(number) ? (number = "0") : number
    );
    const stringInteger = stringSort.map((number: string): string =>
        Number(number)
    );*/
    const stringSort = numbers.map((number: string): number => {
        const value = parseInt(number);
        return isNaN(value) ? 0 : value;
    });
    return stringSort;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollar = amounts.map((amount: string): string =>
        amount.charAt(0) === "$" ? amount.replace("$", "") : amount
    );
    const stringToDollar = dollar.map((amount: string): number => {
        const value = parseInt(amount);
        return isNaN(value) ? 0 : value;
    });
    return stringToDollar;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const isExclamation = (message: string): boolean =>
        message.charAt(message.length - 1) === "!";
    const arrays = messages.map((message: string): string =>
        isExclamation(message) ? message.toUpperCase() : message
    );
    const isQuestionMark = (message: string): boolean =>
        message.charAt(message.length - 1) !== "?";
    const result = arrays.filter(isQuestionMark);
    return result;
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
    //check if there are any negatives
    const anyNegatives = values.some((value: number): boolean => value < 0);
    //create new copy list of values
    const newList = [...values];
    //check if there are any negatives, if true proceed
    if (anyNegatives === true) {
        //find the index of the first negative
        const firstNegative = values.findIndex(
            (value: number): boolean => value < 0
        );
        //create new copy list of values
        const positiveList = values.slice(0, firstNegative);
        //check if the value is after the negative
        //if so, then delete those values from the positiveList values
        //sum up the positives that come before the negative values in the positiveList
        const sum = positiveList.reduce(
            (currentTotal: number, value: number) => currentTotal + value,
            0
        );
        //console.log(filterNegative);
        //now insert this sum after the negative in the values copy list
        newList.splice(firstNegative + 1, 0, sum);
        return newList;
    } else if (anyNegatives === false) {
        const sum = values.reduce(
            (currentTotal: number, value: number) => currentTotal + value,
            0
        );
        newList.splice(newList.length, 0, sum);
        return newList;
    }
    return newList;
}
