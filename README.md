# mitra-challenge

## Instalation

* git clone https://github.com/renankcb/mitra-challenge.git
* cd mitra-challenge
* npm install

## Run

npm test

## Files

* __mitra-first-question.js__ : Create a method that, given a list of integers, returns the highest product between 3 of those numbers. Example:
[1, 10, 2, 6, 5, 3] = 300 
* __mitra-second-question.js__ : You have this endpoint https://api.miconnexdev.com/test/1 which returns the results in this format:
{
   id: number, //1
   value: number, //4
   children: number[] //[2,3,4,27]
}
You should loop the children also and call the same api  https://api.miconnexdev.com/test/{id} and get different results in the same format.
Find the average value of all the parent/children of this tree if you start from id=1.
* __test.js__ : Contains the test logic

## Obs

Second question will run in the console after running 'npm test'
