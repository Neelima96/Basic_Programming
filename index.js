
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}
if(isPrime(9))
{
  console.log(`Prime num`);
}
else
{
  console.log(`Not a prime num`);
}
