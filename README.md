## A worked example built from the init branch of calebpollman/react-calculator

Read Caleb's excellent blog post which is one of the best introduction tutorials to Test Driven Development I have found.

A simple Calculator app created for a blog post at [testdriven.io](https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-one/). 

and part two at

https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-two/

The post ends with a challenge to find and fix bugs in the calculator, which is a great way to apply what you have learned.

This worked example includes a fix for the calculator which produced the wrong result for 3.25 / 2

It produced the result 1.5.  He had warned us that the calculator does not handle decimals well.

The correct result is 1.625.

A test was added which failed and highlighted the issue, then a fix was added. Can you find the fix which changed the test from red to green?


# TDD React

A simple Calculator app created for a blog post at [testdriven.io](https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-one/). 

and part two at

https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-two/


git clone https://github.com/andrewc2020/TDD-react-calculator.git

npm install

npm test

npm start



## Local Setup for starting from scratch from Caleb's init repository.

```sh
$ git clone git@github.com:calebpollman/react-calculator.git
```

```sh
$ cd react-calculator
```

```sh
$ npm install
```

## Run Locally

```sh
$ npm start
```

## Run Tests

```sh
$ npm test
```
