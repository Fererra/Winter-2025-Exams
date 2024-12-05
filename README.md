# Winter 2025 Exams for SEF1

- You need github account, node.js and text editor or IDE installed
- You can use any online materials, docs, FAQs, AI tools, Videos, etc. it is not important how can you get understanding of tasks and solutions, but we need understanding, not just solutions
- Deadline for all students: 2025-01-15 14:00
- Here is additional materials you may refer:
  - [JavaScript Guide - English version on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
  - [JavaScript for beginners - Ukrainian version](https://youtu.be/FlXsGI7rzWE)
  - [JavaScript for beginners - Russian version](https://youtu.be/HetL0ETbN6Y)
  - [Large lectures for first year students](https://github.com/HowProgrammingWorks/Index/blob/master/Courses/Fundamentals.md)
  - [Large lectures with time codes](https://github.com/HowProgrammingWorks/Index/blob/master/Courses/Fundamentals-timecodes.md)
  - [Dictionary](https://github.com/HowProgrammingWorks/Dictionary)
- Seminars and lectures closely related to exams:
  - [Seminar 1](https://youtu.be/eYjf_WrYAqk)
  - [Seminar 2](https://youtu.be/05iTAT_t6cI)
  - [Antipatterns and refactoring](https://www.youtube.com/playlist?list=PLHhi8ymDMrQb3PVcPFAUI-ZgtAMkpq9yV)
  - See examples in `/Example` directory
- For those who have projects instead of this exams tasks:
  - You need to create screencast video presentation of codebase and project functionality: 15-30 minutes length
  - Upload it to Youtube, Google disk or other hosting with video support and add link to this video in your project repository
- For those who want technical interview:
  - Write your request in our telegram group ASAP and I'll schedule call
- Fork this repository: https://github.com/HowProgrammingWorks/Winter-2025-Exams
- Clone this repository to your machine or you can do everything in Github interface or integrated VSCode IDE
- Create branch `exams`
- See directory `/Tasks` there are 38 tasks prepared in one of the worst possible implementation and style
- You can select from 5 up to 10 tasks for exams (except `difference.js` and `size.js`) to refactor and optimize in a few steps (you may do all the tasks if you want but 10 is enough for "A")
- Tasks code works and gives right results. You need to change files but do not break functionality covered by tests
- To improve code style you may use:
  - Eslint to check style and analyze syntax: https://eslint.org
  - Prettier to optimize style and code layout: https://prettier.io
  - Here is recommended eslint config: https://github.com/HowProgrammingWorks/API/blob/master/.eslintrc.json
- Use tests from `.tests.js` files to check tasks functionality
  - For example run: `node size.test.js` to check `size.js` or `npm t` (to check all taks)
  - Output example: `Test size.js: Passed: 11 of 11`
  - If tests fails you will see something like: `Case: size(23456789) -> "23 mb", expected: "123 mb"`
- Your task is to improve (respect list priority):
  - Code readability
  - Code style
  - Simplicity
  - Quality
  - Supportability
  - Reliability
  - Testability
- I'd advice to find a few friends from the group and cross-review the code before exams
- Here is a checklist of common problems we have in code:
  - Do not mutate function input parameters
  - Prefer arrow functions for JavaScript and `lambda` for `Python`
  - Preferably use `for..of` or `for` on a variable or `Array/map`, and avoid `for..in` and `forEach`
  - Use intermediate identifiers to separate long expressions
  - Prefer `const` and use `let` as a last resort, but never use `var`
  - Convert all magic values to constants
  - Follow the rules for naming identifiers
  - Think carefully about the names of identifiers so that when reading the code, everyone understands their contents
  - Don't make functions too long
  - Don't make a big stack of if statements, use arrays and objects instead
- Hints:
  - Use eslint and prettier, fix all warnings
  - Follow code style and naming conventions from lectures and code examples
  - Respect 2 space indentation
  - Add empty line between semantic blocks for visual separation
  - Don't change incoming parameters
  - Decompose complex functions
  - Respect SRS (separation of concerns)
  - Respect SRP (single responsibility principle)
  - Prefer const, minimize let usage
  - Remove unneeded operations, calls, arguments, blocks, etc.
  - Prefer arrow functions
  - Use round brackets even for single argument lambda functions
  - Optimize loop invariant
  - Optimize lexical scope, minimize area of identifier visibility
  - Prefer `for..of` loops, sometimes use classical `for`, in a rare use `.map()`, try to avoid `.forEach()`
  - Use intermediate variables
  - Decompose long expressions
  - Return result of logical expression instead of `return true; else return false;`
- If you prefer any other language instead of JavaScript then translate the code into your language as close as possible
- Make each refactoring and optimization step a separate commit
- It is important not to rewrite code from scratch but to improve it step by step
- At the second seminar, I showed an example of how to optimize the code step by step
- When you're done, make a pull request to my repository
- Good luck!
