/*
Linear Search

We will create a function called linearSearch that accepts a value that is an integer or string 
and an array as parameters. The function will search every element in the array for the value and 
return the position of the value in the array if it is found. If the value is not in the array, 
it will return -1. For example, calling linearSearch(1, [3, 4, 2, 1, 5]) would return 3, 
and calling linearSearch(0, [3, 4, 2, 1, 5]) would return -1.
*/

function linearSearch(num, arrayNum) {
    let position = -1;
    let increment = 0;
    while (increment < arrayNum.length) {
        if (arrayNum[increment] == num) {
            position = increment;
            break;
        }
        increment++;
    }
    console.log(position);
    return position;
}

linearSearch(1, [3, 4, 2, 1, 5]);