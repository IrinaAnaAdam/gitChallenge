function summ(arr)
{
var sum = arr.reduce(function(a, b)
    {
      return a + b;
    }, 0);
    return sum;
}
