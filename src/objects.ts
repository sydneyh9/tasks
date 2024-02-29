import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    const blankQuestion = {
        body: "",
        expected: "",
        id: id,
        name: name,
        options: [],
        points: 1,
        published: false,
        type: type
    };
    return blankQuestion;
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
export function isCorrect(question: Question, answer: string): boolean {
    const isValid = (answer: string): boolean =>
        answer.trimEnd().trimStart().toLowerCase() ===
        question.expected.trimEnd().trimStart().toLowerCase();
    const result = isValid(answer);
    return result;
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    let validAnswer = true;
    if (question.type === "short_answer_question") {
        validAnswer = true;
    } else if (question.type === "multiple_choice_question") {
        const lookupOption: Record<string, []> = Object.fromEntries(
            question.options
        );
        if (answer === lookupOption[answer]) {
            validAnswer = true;
        } else {
            validAnswer = false;
        }
    }
    return validAnswer;
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */
export function toShortForm(question: Question): string {
    let short = "";
    if (question.name.length >= 10) {
        short =
            "" +
            question.name[0] +
            question.name[1] +
            question.name[2] +
            question.name[3] +
            question.name[4] +
            question.name[5] +
            question.name[6] +
            question.name[7] +
            question.name[8] +
            question.name[9];
    } else if (question.name.length === 9) {
        short =
            "" +
            question.name[0] +
            question.name[1] +
            question.name[2] +
            question.name[3] +
            question.name[4] +
            question.name[5] +
            question.name[6] +
            question.name[7] +
            question.name[8];
    } else if (question.name.length === 8) {
        short =
            "" +
            question.name[0] +
            question.name[1] +
            question.name[2] +
            question.name[3] +
            question.name[4] +
            question.name[5] +
            question.name[6] +
            question.name[7];
    } else if (question.name.length === 7) {
        short =
            "" +
            question.name[0] +
            question.name[1] +
            question.name[2] +
            question.name[3] +
            question.name[4] +
            question.name[5] +
            question.name[6];
    } else if (question.name.length === 6) {
        short =
            "" +
            question.name[0] +
            question.name[1] +
            question.name[2] +
            question.name[3] +
            question.name[4] +
            question.name[5];
    } else if (question.name.length === 5) {
        short =
            "" +
            question.name[0] +
            question.name[1] +
            question.name[2] +
            question.name[3] +
            question.name[4];
    } else if (question.name.length === 4) {
        short =
            "" +
            question.name[0] +
            question.name[1] +
            question.name[2] +
            question.name[3];
    } else if (question.name.length === 3) {
        short = "" + question.name[0] + question.name[1] + question.name[2];
    } else if (question.name.length === 2) {
        short = "" + question.name[0] + question.name[1];
    } else {
        short = question.name[0];
    }
    return "" + question.id + ": " + short;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
export function toMarkdown(question: Question): string {
    const newQuestion = { ...question };
    return newQuestion;
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    const newQuestion = { ...question, name: newName };
    return newQuestion;
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
export function publishQuestion(question: Question): Question {
    let newQuestion = { ...question };
    if (question.published === true) {
        newQuestion = { ...question, published: false };
    } else {
        newQuestion = { ...question, published: true };
    }
    return newQuestion;
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    const newName = "Copy of " + oldQuestion.name;
    const newQuestion = {
        ...oldQuestion,
        name: newName,
        published: false,
        id: id
    };
    return newQuestion;
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    const newQuestion = {
        ...question,
        options: [...question.options, newOption]
    };
    return newQuestion;
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    const newQuestion = {
        ...{ points },
        body: contentQuestion.body,
        type: contentQuestion.type,
        options: contentQuestion.options,
        expected: contentQuestion.expected,
        published: false,
        id: id,
        name: name
    };
    return newQuestion;
}
