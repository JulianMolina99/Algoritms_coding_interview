/*
Implement Binary Search

Binary search is an O(log(n)) efficiency algorithm for searching a sorted array to find an element. It operates using the following steps:

    Find the middle value of a sorted array. If value == target return (found it!).
    If middle value < target, search right half of array in next compare.
    If middle value > target, search left half of array in next compare.

As you can see, you are successively halving an array, which gives you the log(n) efficiency. 
For this challenge, we want you to show your work - how you got to the target value... the path you took!

Write a function binarySearch that implements the binary search algorithm on an array, returning the path you took (each middle value comparison) 
to find the target in an array.

The function takes a sorted array of integers and a target value as input. It returns an array containing (in-order) the middle value you found at each 
halving of the original array until you found the target value. 
The target value should be the last element of the returned array. If value not is found, return the string Value Not Found.

For example, binarySearch([1,2,3,4,5,6,7], 5) would return [4,6,5].

For this challenge, when halving, you MUST use Math.floor() when doing division: Math.floor(x/2). This will give a consistent, testable path.

Note: The following array will be used in tests:

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];


*/

function binarySearch(searchList, value) {
    let arrayPath = [];
    let index = 0;
    let number = 0;
    let isValue = false;
    while(searchList.length > 0){
        searchList.length % 2 === 0? index = Math.floor(searchList.length/2-1): index = Math.floor(searchList.length/2);
        number = searchList[index];
        
        if(number === value){
            arrayPath.push(number);
            isValue = true;
            break;
        } else{
            if(number > value){
                arrayPath.push(number);
                searchList.splice(index, searchList.length-index);
            } else{
                arrayPath.push(number);
                searchList.splice(0,index+1);
            }
        }
    }
    if(isValue){
        return arrayPath;
    } else{
        return 'Value Not Found';
    }
}
