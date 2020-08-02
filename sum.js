function summ(arr)
{
var sum = arr.reduce(function(a, b)
    {
      return a + b; //bug fixed
    }, 0);
    return sum;
}
