## A worked example of @CalebPollman blog post built from the init branch of his git repository

calebpollman/react-calculator.git


The example includes a fix for the calculator which produced the wrong result for 3.25 / 2

i.e. 1.5. The correct result is 1.625.

A test was added which failed. Can you find the fix which changed the test from red to green?


# TDD React

A simple Calculator app created for a blog post at [testdriven.io](https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-one/). 

and part two at

https://testdriven.io/blog/tdd-with-react-jest-and-enzyme-part-two/

## Local Setup

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
