/* Sigma  */
function sigma(num){
    sum = 0;
    for (i=0; i <= num; i++){
        sum+=i;
    }
    return sum;
}
/* console.log(sigma(5)) */




/* Factorial */
function factorial(num){
    var nth = [];
    
    for (i=1; i <= num; i++){
        nth.push(i);
        
    }

    var sum=nth[0];
    for(i=1; i<nth.length; i++){
        sum = nth[i]*sum;
    }
    return sum;
}
/* console.log(factorial(5)); */




/* Fibonacci */
function fibonacci(num){
        if(num==1)
            return 0;
        if(num==2)
            return 1;
        var num1=0;
        var num2=1;
        var sum;
        var i=2;
        while (i<num)  
        {
            sum=num1+num2;
            num1=num2;
            num2=sum;
            i+=1;
        }
        return num2;
    }
console.log(fibonacci(8))


/* Array: Second-to-Last: */
function second_to_last(arr){
    var num = arr[arr.length-2]
    if (num != undefined){
        return num;
    }
        else{
            return null;
        }
    
}
/* console.log(second_to_last([42, true, 4, "Liam", 7]))
console.log(second_to_last([42]))
 */




/* Array: Nth-to-Last */
function nth_to_last(arr, num){
    var nth = arr[arr.length-num]
    if (nth != undefined){
        return nth;
    }
        else{
            return null;
        }
    
}
/* console.log(nth_to_last([5,2,3,6,4,9,7],3)) */


/* Array: Second-Largest */
function second_largest(arr){
    var largest = null;
    var second = null;
    for(i=0; i < arr.length; i++){
        if(arr[i] > largest){
            second = largest;
            largest = arr[i];
        }
        else if(arr[i] > second){
            second = arr[i];
        }
    }
    return second;
}
/* console.log(second_largest([42,1,4,3.14,7])) */




/* Double Trouble */
function d_trouble(arr){
    var tmparr = []
    for(i=0; i < arr.length; i++){
        tmparr.push(arr[i]);
        tmparr.push(arr[i]);
    }
    arr = tmparr;
    return arr;
}
/* console.log(d_trouble([4, "Ulysses", 42, false])) */