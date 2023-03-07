const expect = require('expect');

// Importing the function from the file where it is implemented
const solution = require('../solutions/solution.js');

describe('solution', () => {
    describe('logBetween', () => {
        it('returns an array from lowNum to highNum (inclusive)', () => {
          expect(logBetween(1, 5)).toEqual([1, 2, 3, 4, 5]);
          expect(logBetween(-1, 2)).toEqual([-1, 0, 1, 2]);
          expect(logBetween(4, 6)).toEqual([4, 5, 6]);
        });
      
        it('returns an empty array if highNum is less than lowNum', () => {
          expect(logBetween(6, 4)).toEqual([]);
        });
      
        it('returns an array with one element if highNum and lowNum are the same', () => {
          expect(logBetween(3, 3)).toEqual([3]);
        });
      });

      describe('logBetweenStepper', () => {
        it('returns an array of numbers between min and max at step intervals', () => {
          expect(logBetweenStepper(5, 9, 1)).toEqual([5, 6, 7, 8, 9]);
          expect(logBetweenStepper(-10, 15, 5)).toEqual([-10, -5, 0, 5, 10, 15]);
          expect(logBetweenStepper(0, 20, 4)).toEqual([0, 4, 8, 12, 16, 20]);
        });
      
        it('returns an array with one element if min and max are the same', () => {
          expect(logBetweenStepper(3, 3, 2)).toEqual([3]);
        });
      
        it('returns an empty array if step is less than or equal to zero', () => {
          expect(logBetweenStepper(1, 10, 0)).toEqual([]);
          expect(logBetweenStepper(1, 10, -1)).toEqual([]);
        });
      
        it('returns an empty array if max is less than min', () => {
          expect(logBetweenStepper(10, 1, 2)).toEqual([]);
        });
      });

      describe('printReverse', () => {
        it('returns an array of all numbers from max to min (exclusive), in reverse order', () => {
          expect(printReverse(1, 5)).toEqual([4, 3, 2]);
          expect(printReverse(7, 11)).toEqual([10, 9, 8]);
          expect(printReverse(0, 1)).toEqual([0]);
          expect(printReverse(-3, 2)).toEqual([1, 0, -1, -2]);
        });
      
        it('returns an empty array if max is less than or equal to min', () => {
          expect(printReverse(5, 2)).toEqual([]);
          expect(printReverse(3, 3)).toEqual([]);
        });
      });

      describe('fizzBuzz', () => {
        it('returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both', () => {
          expect(fizzBuzz(10)).toEqual([3, 5, 6, 9]);
          expect(fizzBuzz(20)).toEqual([3, 5, 6, 9, 10, 12, 18]);
          expect(fizzBuzz(5)).toEqual([3, 5]);
          expect(fizzBuzz(0)).toEqual([]);
        });
      
        it('returns an empty array if max is less than or equal to 0', () => {
          expect(fizzBuzz(-5)).toEqual([]);
          expect(fizzBuzz(0)).toEqual([]);
        });
      });

      describe('isPrime', () => {
        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        const nonPrimes = [4, 6, 8, 9, 10, 12, 14, 15, 21, 25, 27, 33, 35, 39, 45, 49, 55, 57, 63, 65, 75, 85, 91, 95, 99];
        
        it('returns true if number is prime', () => {
          primes.forEach(number => {
            expect(isPrime(number)).toEqual(true);
          });
        });
      
        it('returns false if number is not prime', () => {
          nonPrimes.forEach(number => {
            expect(isPrime(number)).toEqual(false);
          });
        });
      
        it('returns false if number is less than or equal to 1', () => {
          expect(isPrime(-1)).toEqual(false);
          expect(isPrime(0)).toEqual(false);
          expect(isPrime(1)).toEqual(false);
        });
      });
})
