//Basic task:
// If a number is divisible by 3: output 'Fizz' if by 5: 'Bazz', if by 3 and 5:'FizzBuzz'; i (as a string) if none of the above conditions are true.

const isDivisibleBy = (n: number): string => {
  let result: string = ''
  if (n % 3 === 0) result += 'Fizz'
  if (n % 5 === 0) result += 'Bazz'
  if (result === '') result += 'i'
  return result
}

console.log(isDivisibleBy(0), isDivisibleBy(8), isDivisibleBy(9)) //FizzBuzz i Fizz
