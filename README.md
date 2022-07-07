# Project Euler 029 - Distinct Powers

Consider all integer combinations for a to the power of b for a between 2 and 5 and b between 2 and 5.

    2^2 = 4, 2^3 = 8, 2^4=16, 2^5 = 32
    3^2 = 9, 3^3 = 27, 3^4 = 81, 3^5 = 243
    4^2 = 16, 4^3 = 64, 4^4 = 256, 4^5 = 1024
    5^2 = 25, 5^3 = 125, 5^4 = 625, 5^5 = 3125

If they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms:

    4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125

The aim is to find the number of distinct terms in the sequence generated by a to the power of b for a between 2 and n and b between 2 and n.

Information at [Project Euler 029](https://projecteuler.net/problem=29)

## UX

**Getting Started**

Enter a whole number between 2 and 100 in the input field and click on the Submit Button.  Unless you have made an invalid input, you will see the number entered as well as the number of distinct terms in the sequence generated by a to the power of b, where a is between 2 and n and b is between 2 and n.  For example, if you entered 15, you would expect to get 177 distinct terms.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 2 or greater than 100
- Entering a number, but it is not an integer

As a user, I expect the function `distinctPowers(15)` to return a number.

As a user, I expect the function `distinctPowers(15)` to return 177.

As a user, I expect the function `distinctPowers(20)` to return 324.

As a user, I expect the function `distinctPowers(25)` to return 519.

As a user, I expect the function `distinctPowers(30)` to return 755.

**Information Architecture**

The function `distinctPowers(n)` returns a number, where `n` is a number between 2 and 100.

